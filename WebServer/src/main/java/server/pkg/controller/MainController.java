package server.pkg.controller;
import com.amazonaws.services.s3.model.AmazonS3Exception;
import com.amazonaws.services.s3control.model.AWSS3ControlException;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.timgroup.statsd.StatsDClient;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Sort;
import org.springframework.orm.ObjectOptimisticLockingFailureException;
import org.springframework.web.multipart.MultipartFile;
import server.pkg.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import server.pkg.repository.*;
import server.pkg.service.AmazonService;
import server.pkg.service.userService;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.TimeUnit;
import org.slf4j.Logger;
import java.util.stream.Collectors;

//@CrossOrigin(value = "http://localhost:4200")
@Controller
@RestController
@RequestMapping(path="/webapp")
public class MainController {

    private userService userService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private AmazonService  awsService;
    @Autowired
    private ImageRepository imageRepository;
    @Autowired
    private userSessionRepository userSessionRepository;
    int count = 1;
    private final static Logger logger =  LoggerFactory.getLogger(MainController.class);
    @Autowired
    private StatsDClient statsD;
    @PostMapping(path="/addUser")
    public @ResponseBody User addNewUser (@RequestParam String fname,@RequestParam String lname
            , @RequestParam String email,@RequestParam String pwd) {
        long start = System.currentTimeMillis();
        statsD.incrementCounter("Register_User_API");
        User n = new User();
        n.setFirstName(fname);
        n.setLastName(lname);
        n.setEmailId(email);
        n.setPassword(userService.hashPassword(pwd.toCharArray()));
        long qstart = System.currentTimeMillis();
        userRepository.save(n);
        long end = System.currentTimeMillis();
        statsD.recordExecutionTime("SaveUser_Query", end-qstart);
        long timeElapsed = end - start;
        logger.info("Registered new User: "+email+" Time taken: "+timeElapsed+"ms");
        statsD.recordExecutionTime("addUserApiTime", timeElapsed);
        return n;
    }


    @PostMapping(path="/loginCheck")
    public @ResponseBody User loginCheck (@RequestParam String email,@RequestParam String pwd) {
        long start = System.currentTimeMillis();
        statsD.incrementCounter("Login_Check_API");
        User c = getUser(email);
        if(c == null){
            c= new User();
            c.setEmailId("User does not exist");logger.info("Checked if user is valid for: "+email);
            return c;
        }
        String givenPwd = userService.hashPassword(pwd.toCharArray());
        if(c.getPassword().equals(givenPwd)){
            userSessionRepository.save(new userSession(c.getEmailId()));
            return c;
        }
        c.setEmailId("Incorrect Password");
        long end = System.currentTimeMillis();
        long timeElapsed = end - start;
        logger.info("Checked if user is valid for: "+email+" Time taken: "+timeElapsed+"ms");
        return c;
    }


    @GetMapping(path="/getAllUsers")
    public @ResponseBody Iterable<User> getAllUsers() {

        return userRepository.findAll();
    }

    @GetMapping(path="/getUser")
    public @ResponseBody User getUser(@RequestParam String email) {

        Iterable<User> u = userRepository.findAll();
        for (User ur :u) {
            if(ur.getEmailId().equals(email)){
                return ur;
            }
        }
        return null;
    }

    @PostMapping("/updateUser")
    public User updateEmployee(@RequestParam String fname,@RequestParam String lname
            , @RequestParam String email, @RequestParam String pwd)  {
        long start = System.currentTimeMillis();
        statsD.incrementCounter("updateUser_API");
        User updatedUser = new User();
        updatedUser.setFirstName(fname);
        updatedUser.setLastName(lname);
        updatedUser.setEmailId(email);
        updatedUser.setPassword(userService.hashPassword(pwd.toCharArray()));
        User currentUser = getUser(email);
        if(currentUser != null){
            long qstart = System.currentTimeMillis();
            userRepository.delete(currentUser);
            userRepository.save(updatedUser);
            long qend = System.currentTimeMillis();
            statsD.recordExecutionTime("updateUser_Query", qend-qstart);
        }
        long end = System.currentTimeMillis();
        long timeElapsed = end - start;
        logger.info("Updated User: "+email+" Time taken: "+timeElapsed+"ms");
        statsD.recordExecutionTime("updateUserApiTime", timeElapsed);
        return updatedUser;
    }

    @PostMapping(path="/addBook")
    public @ResponseBody Book addNewBook (@RequestBody Book book) {
        long start = System.currentTimeMillis();
        statsD.incrementCounter("addBook_API");
        if(isSessionExists(book.getUser())){
            book.setAddedOn(new Date());
            book.setUpdatedOn(new Date());
            if(book.getPublications() == null)
                book.setPublications(new Date().toString());
            if(book.getImageURL() == null)
                book.setImageURL("");
            long qstart = System.currentTimeMillis();
            bookRepository.save(book);
            long end = System.currentTimeMillis();
            long timeElapsed = end - start;
            statsD.recordExecutionTime("addBook_Query",end-qstart);
            logger.info(book.getUser()+" added Book: "+book.getTitle()+" Time taken: "+timeElapsed+"ms");
            statsD.recordExecutionTime("addBookApiTime", timeElapsed);
            return book;
        }
        long end = System.currentTimeMillis();
        long timeElapsed = end - start;
        logger.info(book.getUser()+" not logged in.Couldnt add book.Time taken: "+timeElapsed+"ms");
        statsD.recordExecutionTime("addBookApiTime", timeElapsed);
       return null;
    }

    @GetMapping(path="/getAllBooks")
    public @ResponseBody List<Book> getAllBooks() {
        long start = System.currentTimeMillis();
        statsD.incrementCounter("getAllBooks_API");
        Comparator<Book> cmp =  Comparator.comparing(Book::getTitle).thenComparing(Book::getPrice);
        List<Book> books = bookRepository.findAll(Sort.by(Sort.Direction.ASC,"price"))
                .stream().sorted(cmp).collect(Collectors.toList());
        long end = System.currentTimeMillis();
        long timeElapsed = end - start;
        statsD.recordExecutionTime("getAllBooks_Query", timeElapsed);
        logger.info("Fetched all Book. Time taken: "+timeElapsed+"ms");
        statsD.recordExecutionTime("getAllBooksApiTime", timeElapsed);
        return  books;
    }

    @GetMapping(path="/getUsersBooks")
    public @ResponseBody List<Book> getUsersBooks(@RequestParam String email) {

        List<Book> u = bookRepository.findAll();
        List<Book> books = u.stream().filter(x->x.getUser().equals(email)).collect(Collectors.toList());
        return books;
    }

    @PostMapping("/updateBook")
    public Book updateBook(@RequestBody Book book)  {
        long start = System.currentTimeMillis();
        statsD.incrementCounter("updateBook_API");
        if(isSessionExists(book.getUser())){
            String counterName = book.getTitle()+"_"+book.getIsbn();
            statsD.incrementCounter(counterName);
            List<Book> b = getUsersBooks(book.getUser());
            Book cb = b.stream().filter(x->x.getIsbn() == book.getIsbn() && x.getUser().equals(book.getUser())).findFirst().get();
            if(cb != null){
                long qstart = System.currentTimeMillis();
                bookRepository.delete(cb);
                book.setAddedOn(book.getAddedOn());
                book.setUpdatedOn(new Date());
                if(book.getPublications() == null)
                    book.setPublications(new Date().toString());
                bookRepository.save(book);
                long end = System.currentTimeMillis();
                statsD.recordExecutionTime("updateBook_Query", end-qstart);
                long timeElapsed = end - start;
                logger.info(book.getUser()+" updated Book: "+book.getTitle()+" Time taken: "+timeElapsed+"ms");
                statsD.recordExecutionTime("updateBookApiTime", timeElapsed);
                updateUsersCart(book);
            }
        }
        return book;
    }

    //owner deletes book
    @PostMapping("/deleteBook")
    public Book deleteBook(@RequestBody Book book) throws IOException {
        long start = System.currentTimeMillis();
        statsD.incrementCounter("deleteBook_API");
        bookRepository.delete(book);
        long qend = System.currentTimeMillis();
        statsD.recordExecutionTime("deleteBook_Query", qend-start);
        deleteBookAlsoInCart(book);
        try{
            List<Image> iall = imageRepository.findAll();
            String isbnb = String.valueOf(book.getIsbn());
            List<Image> images = iall.stream().filter(x->x.getBookowner().equals(book.getUser()) && x.getIsbn().equals(isbnb)).collect(Collectors.toList());
            for (Image i:images){
                String u = i.getUrl();
                String key = u.substring(u.lastIndexOf("/")+1,u.length());
                 awsService.deleteImage(key);logger.info(book.getUser()+" deleted book: "+book.getTitle());
                 imageRepository.delete(i);

            }
            if(!book.getImageURL().equals(" ")&& !book.getImageURL().equals("")){
                String[] urls = book.getImageURL().split("@");
                for (String u: urls) {
                    String key = u.substring(u.lastIndexOf("/")+1,u.length());
                    String res = awsService.deleteImage(key);//book.getImageURL()
                }
            }
            long end = System.currentTimeMillis();
            long timeElapsed = end - start;
            logger.info("Deleted Book and all its Images Book ISBN: "+book.getIsbn()+" Time taken: "+timeElapsed+"ms");
            statsD.recordExecutionTime("deleteBookApiTime", timeElapsed);
        }catch(AmazonS3Exception ex){
            logger.error("Error Occured while deleting Book" +book.getIsbn());

        }


        return book;
    }

    //delete Book In Cart Afterowner deletes book
    @PostMapping("/deleteBookAlsoInCart")
    public Book deleteBookAlsoInCart(@RequestBody Book book1)  {
        statsD.incrementCounter("deleteBookAlsoInCart_API");
        List<Cart> u = cartRepository.findAll();
        if(u.size() > 0){
            Cart cb = u.stream().filter(x->x.getISBN() == book1.getIsbn() && x.getBookOwner().equals(book1.getUser())).findFirst().get();
            if(cb != null){
                Cart c = new Cart();
                c.setUser(cb.getUser());
                c.setISBN(book1.getIsbn());
                c.setPrice(book1.getPrice());
                c.setQuantity(book1.getQuantity());
                c.setAuthors(book1.getAuthors());
                c.setBookOwner(book1.getUser());
                c.setPublications(book1.getPublications());
                c.setTitle(book1.getTitle());
                cartRepository.delete(cb);logger.info("Deleted book from " +cb.getUser()+ "'s Cart");
                return book1;
            }
        }

        return null;
    }

    @PostMapping("/deleteBookFromCart")
    public Cart deleteBookFromCart(@RequestBody Cart cartBook)  {
        long start = System.currentTimeMillis();
        statsD.incrementCounter("deleteBookFromCart_API");
        cartRepository.delete(cartBook);
        long end = System.currentTimeMillis();
        long timeElapsed = end - start;
        statsD.recordExecutionTime("deleteBookFromCart_Query", timeElapsed);
        logger.info(cartBook.getUser()+" deleted book from cart: "+cartBook.getTitle()+" Time taken: "+timeElapsed+"ms");
        statsD.recordExecutionTime("deleteBookFromCartApiTime", timeElapsed);
        return cartBook;
    }


    @PostMapping(path="/addToCart")
    public @ResponseBody Cart addNewBook (@RequestBody Cart cart) {
        long start = System.currentTimeMillis();
        statsD.incrementCounter("addToCart_API");
        if(cart.getPublications() == null)
            cart.setPublications(new Date().toString());
        long qstart = System.currentTimeMillis();
        cartRepository.save(cart);
        long end = System.currentTimeMillis();
        statsD.recordExecutionTime("addToCart_Query", end-qstart);
        long timeElapsed = end - start;
        logger.info(cart.getUser()+" added book to cart: "+cart.getTitle()+" Time taken: "+timeElapsed+"ms");
        statsD.recordExecutionTime("addToCartApiTime", timeElapsed);
        return cart;
    }

    @PostMapping(path="/getUsersCart")
    public @ResponseBody   List<Cart> getUsersCart(@RequestParam String email) {
        long start = System.currentTimeMillis();
        statsD.incrementCounter("getUsersCart_API");
        Comparator<Cart> cmp =  Comparator.comparing(Cart::getTitle).thenComparing(Cart::getPrice);
        List<Cart> u = cartRepository.findAll(Sort.by(Sort.Direction.ASC,"price"))
                .stream().sorted(cmp).collect(Collectors.toList());
        List<Cart> books = u.stream().filter(x->x.getUser().equals(email)).collect(Collectors.toList());
        long end = System.currentTimeMillis();
        long timeElapsed = end - start;
        logger.info(" Fetched books in cart for user: "+email+" Time taken: "+timeElapsed+"ms");
        statsD.recordExecutionTime("getUsersCartApiTime", timeElapsed);
        return books;

    }

    @PostMapping("/updateUsersCart")
    public Cart updateUsersCart(@RequestBody Book book1)  {
        List<Cart> u = cartRepository.findAll();
        if(u.size() != 0){
            Cart cb = u.stream().filter(x->x.getISBN() == book1.getIsbn() && x.getBookOwner().equals(book1.getUser())).findFirst().get();
            if(cb != null){
                Cart c = new Cart();
                c.setUser(cb.getUser());
                cartRepository.delete(cb);
                c.setISBN(book1.getIsbn());
                c.setPrice(book1.getPrice());
                c.setQuantity(book1.getQuantity());
                c.setAuthors(book1.getAuthors());
                c.setBookOwner(book1.getUser());
                c.setPublications(book1.getPublications());
                c.setTitle(book1.getTitle());
                cartRepository.save(c);
                return c;

            }
        }

        return null;
    }
    //    @Retryable(maxAttempts = 10, backoff = @Backoff(delay = 100, maxDelay = 500),
//            include = {ObjectOptimisticLockingFailureException.class, OptimisticLockException.class, DataIntegrityViolationException.class})
    @PostMapping(path="/uploadImage")
    public @ResponseBody String  addImageToBook (@RequestPart(value = "imageFile")  MultipartFile image,@RequestPart String bookISBN,@RequestPart String bookOwner) throws IOException, InterruptedException {
        try{
            long start = System.currentTimeMillis();
            statsD.incrementCounter("addImageToBook_API");
            Image img = new Image();
            img.setIsbn(bookISBN);
            img.setBookowner(bookOwner);
            long qstart = System.currentTimeMillis();
            String imageURL = awsService.uploadImage(image,new Book());
            long qend = System.currentTimeMillis();
            statsD.recordExecutionTime("uploadImgToS3_Time", qend-qstart);
            img.setUrl(imageURL);
            imageRepository.save(img);
            long end = System.currentTimeMillis();
            long timeElapsed = end - start;
            logger.info("Uploaded Image to S3 Bucket by"+bookOwner+" for Book: "+bookISBN+" Time taken: "+timeElapsed+"ms");
            statsD.recordExecutionTime("addImageToBookApiTime", timeElapsed);



//            List<Book> b = getUsersBooks(bookOwner);
//            Book book = null;
//            Optional<Book> result = b.stream().filter(x->x.getIsbn() == Integer.parseInt(bookISBN)).findFirst();
//            if (result.isPresent())
//                book = result.get();
        //    if(book == null && count < 5){
              //  TimeUnit.SECONDS.sleep(3);
                //count++;
               // addImageToBook(image,bookISBN,bookOwner);
             //   return "sucess";
          //  }
            //bookRepository.delete(book);
         //   String imageURL = awsService.uploadImage(image,book);
           // img.setUrl(imageURL);
            //imageRepository.save(img);
            //book.setImageURL(book.getImageURL().equals("")? book.getImageURL()+imageURL+"@": book.getImageURL()+imageURL);
            //bookRepository.save(book);
            return "Uploaded Image Successfully";
        }
        catch ( Exception e) {//ObjectOptimisticLockingFailureException
            logger.error(e.toString());
            count++;
            if(count > 10){
                return "ERROR";
            }
           // addImageToBook(image,bookISBN,bookOwner);
            return "ERROR";
        }

    }

    @PostMapping(path="/getImages")
    public @ResponseBody String[]  getImages (@RequestParam String url) throws IOException {

        if(!url.equals(" ")&& !url.equals("")){
            String[] res = awsService.getImages(url);//book.getImageURL()
            return res;
        }

        return new String[]{} ;
    }

    @PostMapping(path="/deleteImage")
    public @ResponseBody String  deleteImage (@RequestParam String bookISBN,@RequestParam String bookOwner,@RequestParam int index, @RequestParam String url) throws IOException {
        try{
            long start = System.currentTimeMillis();
            statsD.incrementCounter("deleteImage_API");
            List<Image> iall = imageRepository.findAll();
            List<Image> images = iall.stream().filter(x->x.getBookowner().equals(bookOwner)).collect(Collectors.toList());
            Image im = (Image) images.toArray()[index];
            imageRepository.delete(im);
            String u = im.getUrl();
            String key = u.substring(u.lastIndexOf("/")+1,u.length());
            long qstart = System.currentTimeMillis();
            awsService.deleteImage(key);//book.getImageURL()
            long end = System.currentTimeMillis();
            statsD.recordExecutionTime("deleteImageFromS3Time", end-qstart);
            long timeElapsed = end - start;
            logger.info(bookOwner+ " deleted Image and its Metadata: "+bookISBN+" Time taken: "+timeElapsed+"ms");
            statsD.recordExecutionTime("deleteImageApiTime", timeElapsed);


           //            count =1;
//            List<Book> b = getUsersBooks(bookOwner);
//            Book book = null;
//            Optional<Book> result = b.stream().filter(x->x.getIsbn() == Integer.parseInt(bookISBN)).findFirst();
//            if (result.isPresent())
//                book = result.get();
//            if(book == null && count < 5){
//                //TimeUnit.SECONDS.sleep(2);
//                count++;
//                deleteImage( bookISBN, bookOwner, index, url);
//                return "deleted";
//            }
//            if(book != null)
//                bookRepository.delete(book);
//            Book ub = new Book();
//            ub.setUser(bookOwner);
//            ub.setAddedOn(book.getAddedOn());
//            ub.setPublications(book.getPublications());
//            ub.setAuthors(book.getAuthors());
//            ub.setIsbn(book.getIsbn());
//            ub.setPrice(book.getPrice());
//            ub.setTitle(book.getTitle());
//            ub.setQuantity(book.getQuantity());
//            ub.setUpdatedOn(new Date());
//
//            String newURL = "";
//            String[] urls = url.split("@");
//             u = urls[index];
//             key = u.substring(u.lastIndexOf("/")+1,u.length());
//          String  res = awsService.deleteImage(key);//book.getImageURL()
//            for (int i=0;i<urls.length;i++) {
//                if(i!=index)
//                    newURL = newURL==""?urls[i]: newURL+"@"+urls[i];
//            }
//            ub.setImageURL(newURL);
//            if(book != null)
//                bookRepository.save(ub);
            return "DELETED" ;
        }catch (Exception e){
            logger.error(e.toString());
            count++;
            if(count > 10){
                return "ERROR";
            }
            return deleteImage( bookISBN, bookOwner, index, url);
            // return "deleted";
        }

    }

    @PostMapping(path="/getImagesOfUser")
    public @ResponseBody String[]  getImagesOfUser (@RequestParam String user,@RequestParam String isbn) throws IOException {
        long start = System.currentTimeMillis();
        statsD.incrementCounter("getImagesOfUsersBook_API");
        List<Image> iall = imageRepository.findAll();
        List<Image> images = iall.stream().filter(x->x.getBookowner().equals(user) && x.getIsbn().equals(isbn)).collect(Collectors.toList());
        String[] im = new String[images.size()];int x=0;
        for (Image i:images){
            String u = i.getUrl();
            im[x] = awsService.getConvertedImage(u);
            x++;
        }
        long end = System.currentTimeMillis();
        long timeElapsed = end - start;
        logger.info("Fetched images of book: "+isbn+" Time taken: "+timeElapsed+"ms");
        statsD.recordExecutionTime("fetchImagesFromS3", timeElapsed);
        statsD.recordExecutionTime("getImagesOfUserApiTime", timeElapsed);

        return im;
    }

    @PostMapping(path="/logoutUser")
    public @ResponseBody String  logoutUser (@RequestParam String user){
        long start = System.currentTimeMillis();
        if(isSessionExists(user)){
            List<userSession> u = userSessionRepository.findAll();
            userSession usr = u.stream().filter(x->x.getEmailId().equals(user)).findFirst().get();
            userSessionRepository.delete(usr);
        }
        long end = System.currentTimeMillis();
        long timeElapsed = end - start;
        logger.info("User Logged out: "+user+" Time taken: "+timeElapsed+"ms");
        return "user Session Deleted";
    }

    @PostMapping(path="/isSessionExists")
    public boolean isSessionExists(@RequestParam String email){
        List<userSession> u = userSessionRepository.findAll();
        return u.stream().anyMatch(x->x.getEmailId().equals(email));
        //return user.equals(null)?false:true;
    }

    @PostMapping(path="/forgotPassword")
    public String forgotPassword(@RequestParam String email){
        logger.info("Forgot Password API");
        User c = getUser(email);
        if(c == null){
            return "Given User does not exist";
        }
        return awsService.sendEmail(email);

    }










}
