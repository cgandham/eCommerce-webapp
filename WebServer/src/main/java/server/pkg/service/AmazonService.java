package server.pkg.service;

import com.amazonaws.services.s3.model.S3Object;
import org.springframework.web.multipart.MultipartFile;
import server.pkg.model.Book;
import server.pkg.model.User;

import java.io.IOException;

public interface AmazonService {
    String uploadImage(MultipartFile imgFile, Book book) throws IOException;
    String[] getImages(String url) throws IOException;
    String convertImage(S3Object obj)throws IOException;
    String deleteImage(String key) throws IOException;
    String getConvertedImage (String url)throws IOException;
    String sendEmail(String email);

}