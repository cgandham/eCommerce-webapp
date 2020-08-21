package server.pkg.service;

import com.amazonaws.auth.*;
import com.amazonaws.auth.profile.ProfileCredentialsProvider;
import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.dynamodbv2.document.spec.PutItemSpec;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.*;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailService;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailServiceClient;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailServiceClientBuilder;
import com.amazonaws.services.simpleemail.model.*;
import com.amazonaws.services.sns.AmazonSNS;
import com.amazonaws.services.sns.AmazonSNSClient;
import com.amazonaws.services.sns.AmazonSNSClientBuilder;
import com.amazonaws.services.sns.model.ListTopicsResult;
import com.amazonaws.services.sns.model.PublishRequest;
import com.amazonaws.services.sqs.AmazonSQS;
import com.amazonaws.services.sqs.AmazonSQSClient;
import com.amazonaws.services.sqs.AmazonSQSClientBuilder;
import com.amazonaws.services.sqs.model.*;
import com.amazonaws.services.sqs.model.Message;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import net.minidev.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import server.pkg.model.Book;
import server.pkg.model.User;
import server.pkg.repository.BookRepository;
import server.pkg.repository.UserRepository;
import server.pkg.utils.Constants;

import javax.annotation.PostConstruct;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
//import com.amazonaws.services.sqs.model.ReceiveMessageRequest;

@Service
@EnableScheduling
public class AmazonServiceImpl implements AmazonService{

    private AmazonS3 s3Client;

    private AmazonSQS sqsClient;

    private AmazonSNS snsClient;
    private DynamoDB dynamoDB;
    public String dynamodbTable = "csye6225";
    @Autowired
    private BookRepository bookRepository;
    private final static Logger logger =  LoggerFactory.getLogger(AmazonServiceImpl.class);
    private final static String QUEUE = "emailQ";
    AWSCredentials awsCreds = new BasicAWSCredentials(Constants.AWS_AccessKey,Constants.AWS_SecretKey);
//        AWSCredentials credentials=null;
//        credentials = new BasicAWSCredentials("****","****");
//        credentials = new ProfileCredentialsProvider().getCredentials();

    @PostConstruct
    private  void initializeAmazon(){

        this.s3Client = new AmazonS3Client(new BasicAWSCredentials(Constants.AWS_AccessKey,Constants.AWS_SecretKey));
        this.sqsClient =  AmazonSQSClientBuilder.standard()
                .withRegion("us-east-1")
                .withCredentials(DefaultAWSCredentialsProviderChain.getInstance())
                .build();
        this.snsClient =  AmazonSNSClientBuilder.standard()
                .withRegion("us-east-1")
                .withCredentials(DefaultAWSCredentialsProviderChain.getInstance())
                .build();
    }

    @Override
    public String uploadImage(MultipartFile imgFile, Book book) throws IOException {
        String fileUrl = "";
        if(book == null){
            book = new Book();
            book.setPublications(new Date().toString());

        }

        try {
            File file = convertMultipartToFile(imgFile);
            String fileName = new Date().getTime() + "-"+ imgFile.getOriginalFilename().replace(" ","_");
            fileUrl = Constants.AWS_RDS_EndPointUrl+"/"+Constants.AWS_BucketName+"/"+fileName;
            s3Client.putObject(new PutObjectRequest(Constants.AWS_BucketName,fileName,file).withCannedAcl(CannedAccessControlList.PublicRead));
            return fileUrl;
        }catch (Exception ex){
            return ex.toString();
        }
    }

    private File convertMultipartToFile(MultipartFile file) throws IOException {
        File convertFile = new File(file.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(convertFile);
        fos.write(file.getBytes());
        fos.close();
        return convertFile;
    }

    public String[] getImages(String url) throws IOException {
        ObjectListing imgs = s3Client.listObjects(Constants.AWS_BucketName);
        JSONObject json = new JSONObject();

        List<S3ObjectSummary> ils = imgs.getObjectSummaries();
        String[] urls = url.split("@");//int i =0;
        String[] im = new String[urls.length];
        for (int i=0;i<urls.length;i++) {
            String u = urls[i];
            String key = u.substring(u.lastIndexOf("/")+1,u.length());
            S3Object obj = s3Client.getObject(new GetObjectRequest(Constants.AWS_BucketName,key));//"1592437930169-book.jpeg"
            // json.put("Image", convertImage(obj));i++;
            im[i] = convertImage(obj);
        }
        return  im;

        // S3Object obj =;
        // s3Client.getObject(url);
        // return json.toJSONString();
    }

    public String convertImage(S3Object obj) throws IOException {
        String extension = obj.getObjectMetadata().getContentType();
        InputStream is = obj.getObjectContent();
        String fileName = (new Date()).toString() + obj.getKey();
        File f = new File(fileName);
        Files.copy(is,Paths.get(f.getPath()));

        FileInputStream fis = new FileInputStream(f);
        byte[] bytes = new byte[(int)obj.getObjectMetadata().getContentLength()];
        fis.read(bytes);
        String enc = Base64.getEncoder().encodeToString(bytes);
        String image = "data:" + extension+";base64,"+enc;
       // File doomedFile = new File (String.valueOf(Paths.get(f.getPath())), fileName);
        //doomedFile.delete();
        try {
            f.delete();
          //  Files.deleteIfExists(Paths.get(f.getPath()));
           // Files.delete(Paths.get("/home/chandana/a6webapp/webapp/Thu Jul 09 01:31:06 EDT 20201594272141228-book1.jpeg"));
        }catch (Exception ex){

        }

        return image;
    }

    public String deleteImage(String key)
    {
        S3Object obj = s3Client.getObject(new GetObjectRequest(Constants.AWS_BucketName,key));//"1592437930169-book.jpeg"
        s3Client.deleteObject(new DeleteObjectRequest(Constants.AWS_BucketName,key));
        return "Deleted";
    }

    public String getConvertedImage (String url) throws IOException {
        ObjectListing imgs = s3Client.listObjects(Constants.AWS_BucketName);
        JSONObject json = new JSONObject();
        String key = url.substring(url.lastIndexOf("/")+1,url.length());
        S3Object obj = s3Client.getObject(new GetObjectRequest(Constants.AWS_BucketName,key));
        return convertImage(obj);

    }

    public String sendEmail(String email){
       // this.sqsClient = new AmazonSQSClient(awsCreds);
       // this.sqsClient.setRegion(Region.getRegion(Regions.US_EAST_1));
       this.sqsClient =  AmazonSQSClientBuilder.standard()
                .withRegion("us-east-1")
               .withCredentials(DefaultAWSCredentialsProviderChain.getInstance())
                .build();
        this.snsClient =  AmazonSNSClientBuilder.standard()
                .withRegion("us-east-1")
                .withCredentials(DefaultAWSCredentialsProviderChain.getInstance())
                .build();
      //  this.snsClient = new AmazonSNSClient(awsCreds);
       // this.snsClient.setRegion(Region.getRegion(Regions.US_EAST_1));
        String token = UUID.randomUUID().toString();
        StringBuilder messageString = new StringBuilder();
        messageString.append(email + ",");
        messageString.append(token + ",");

        logger.info("Created clients");

//        ListTopicsResult listTopicsResult = this.snsClient.listTopics();
//        PublishRequest publishReq = new PublishRequest()
//                .withTopicArn("arn:aws:sns:us-east-1:576607646506:csye6225")
//                .withSubject("To send email")
//                .withMessage(messageString.toString());//"{'email':'"+email+"'}"
//        snsClient.publish(publishReq);


    //    this.sqsClient = new AmazonSQSClient(awsCreds);
      //  this.sqsClient.setRegion(Region.getRegion(Regions.US_EAST_1));
//        String queueUrl = sqsClient.getQueueUrl(QUEUE).getQueueUrl();
//
//        SendMessageRequest Qrequest = new SendMessageRequest()
//               .withQueueUrl(queueUrl)
//                .withMessageBody(messageString.toString())
//                .withDelaySeconds(0);
//        sqsClient.sendMessage(Qrequest);
       // sendLambdaEmail(email);
        sendMessage(messageString.toString());
      //  checkDynamoDBTable(email,token);
        return "Resend Link will be sent soon";
    }
    private void sendMessage(String messageString) {
        try {
            receiveMessageAndDelete();
            logger.info("ReceiveMessageAndDelete");
           // CreateQueueResult create_result = sqsClient.createQueue(QUEUE);
            String queueUrl = sqsClient.getQueueUrl(QUEUE).getQueueUrl();
           // messageString.append("http://lb.prod.chandanawebapp.me/forgotPWD.");
            //ReceiveMessageRequest receiveMessageRequest = new ReceiveMessageRequest(queueUrl);
            //List<Message> messages = this.sqsClient.receiveMessage(receiveMessageRequest).getMessages();
            //creating msg req
            logger.info("Adding msg to queue");
            SendMessageRequest Qrequest = new SendMessageRequest()
                    .withQueueUrl(queueUrl)
                    .withMessageBody(messageString.toString())
                    .withDelaySeconds(0);
            sqsClient.sendMessage(Qrequest);

            receiveMessageAndDelete();
        } catch (AmazonSQSException exception) {
            if (!exception.getErrorCode().equals("The queue already exists" )) {
                throw exception;
            }
        }
    }

    @Scheduled(cron = "0 0/1 * 1/1 * ?")
    private void receiveMessageAndDelete() {
        try{
            String queueUrl = " ";
            if(this.sqsClient !=null){
                logger.info("receiveMessageAndDelete");
                queueUrl = sqsClient.getQueueUrl(QUEUE).getQueueUrl();
                List<Message> receivedMessageList = sqsClient.receiveMessage(sqsClient.getQueueUrl(QUEUE).getQueueUrl()).getMessages();
                for(Message message : receivedMessageList) {
                    if (message.getBody() !=null && !message.getBody().isEmpty()) {
                        //   JsonObject jsonObject = new JsonParser().parse(message.getBody()).getAsJsonObject();
                        // String toEMAIL = jsonObject.get("email").getAsString();
                        PublishRequest publishReq = new PublishRequest()
                                .withTopicArn("arn:aws:sns:us-east-1:576607646506:csye6225")
                                .withSubject("To send email")
                                .withMessage(message.getBody());
                        //.withMessage("{'email':'"+email+"'}");
//                PublishRequest req = new PublishRequest();
//                req.setMessage(message.getBody());
//                req.setTopicArn("arn:aws:sns:us-east-1:576607646506:csye6225");
                        snsClient.publish(publishReq);
                        sqsClient.deleteMessage(queueUrl, message.getReceiptHandle());
                    }
                }
            }

            logger.info("receiveMessageAndDelete END");
        }
        catch (Exception ex){
            logger.info("Error occured in receiveMessageAndDelete: "+ex);
        }

    }

    private void sendLambdaEmail(String email,String token){
        DynamoDB dynamoDB;
        AmazonDynamoDB c = new AmazonDynamoDBClient(awsCreds);
        c.setRegion(Region.getRegion(Regions.US_EAST_1));


        String EMAIL_SUBJECT="Reset Password";
        String EMAIL_TEXT = "The link to reset your password :- ";

        //  client.setRegion(Region.getRegion(Regions.US_EAST_1));
        dynamoDB = new DynamoDB(c);
        Table table = dynamoDB.getTable("csye6225");
        if(table != null) {

        }
//        AmazonSimpleEmailService client = new AmazonSimpleEmailServiceClient(awsCreds);
//        client.setRegion(Region.getRegion(Regions.US_EAST_1));
        AmazonSimpleEmailService client = AmazonSimpleEmailServiceClientBuilder.standard()
                .withRegion(Regions.US_EAST_1).build();

        try{
            String emailVal = "";
            //String TO = jsonObject.get("email").getAsString();
            emailVal += "<p><a href='#'>http://" + "prod.chandanawebapp.me"+"/forgotPWD/"+token+ "</a></p><br>";
            emailVal =  emailVal.replaceAll("\"","");
            String FROM = "no-reply@" + "prod.chandanawebapp.me";
            SendEmailRequest req = new SendEmailRequest()
                    .withDestination(new Destination()
                            .withToAddresses(email))
                    .withMessage(new com.amazonaws.services.simpleemail.model.Message()
                            .withBody(new Body()
                                    .withHtml(new Content()
                                            .withCharset("UTF-8")
                                            .withData( EMAIL_TEXT +" <br/>" + emailVal)))
                            .withSubject(new Content()
                                    .withCharset("UTF-8")
                                    .withData(EMAIL_SUBJECT)))
                           .withSource(FROM);

            SendEmailResult response = client.sendEmail(req);
        }
        catch (Exception ex){
            System.out.println(ex);
        }

    }

    public void checkDynamoDBTable(String toEMAIL,String token) {
        long now = Calendar.getInstance().getTimeInMillis() / 1000;
        long TTL = 15 * 60;
        long totalTTL = TTL + now;

        AmazonDynamoDB c = new AmazonDynamoDBClient(awsCreds);
        c.setRegion(Region.getRegion(Regions.US_EAST_1));
        this.dynamoDB = new DynamoDB(c);
        Table table = dynamoDB.getTable(dynamodbTable);

        if(table != null){
            Item itemToAdd= new Item().withString("id", toEMAIL)
                                      .withLong("TTL", totalTTL);
            PutItemSpec item2 = new PutItemSpec().withItem(new Item()
                    .withPrimaryKey("id", toEMAIL)
                    .withString("token", token)
                    .withLong("ttl", totalTTL));
            table.putItem(item2);

//            table.putItem(new PutItemSpec().withItem(new Item()
//                    .withPrimaryKey("email", toEMAIL)
//                    .withString("token", token)
//                    .withLong("ttl", totalTTL)));
        }

//        if (table == null) {
//    //        logger.info("DynamoDB table not found");
//        } else {
//
//            long ttlDBValue = 0;
//            Item item = table.getItem("email", toEMAIL);
//
//            if (item != null)
//                ttlDBValue = item.getLong("ttl");
//
//            if (item == null || (ttlDBValue < now && ttlDBValue != 0)) {
//                System.out.println("creating new token and sending email to: " + toEMAIL);
//        //        logger.info("ttl expired, creating new token and sending email");
//                table.putItem(new PutItemSpec().withItem(new Item()
//                        .withPrimaryKey("email", toEMAIL)
//                        .withString("token", token)
//                        .withLong("ttl", totalTTL)));
//
//              //  logger.info("AWS request ID:" + context.getAwsRequestId());
//                //context.getLogger().log("AWS message ID:" + input.getRecords().get(0).getSNS().getMessageId());
//            }
//        }
    }

}
