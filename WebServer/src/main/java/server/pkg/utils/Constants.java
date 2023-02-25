package server.pkg.utils;

public class Constants {
    public static final String AWS_RDS_EndPointUrl = "https://s3.us-east-1.amazonaws.com";
    public static String AWS_AccessKey;//= System.getenv("ACCESS_KEY") == null?"uhjk":System.getenv("ACCESS_KEY");
    public static String AWS_SecretKey;// = System.getenv("SECRET_KEY") == null?"p8e7ly+hjhgj+bDJFBZ9e0/":System.getenv("SECRET_KEY");
    public static String AWS_BucketName;// = System.getenv("s3_bucketname")== null?"webapp.chandana.gandham":System.getenv("s3_bucketname");//

    public static String topicARN;

    public static String getTopicARN() {
        return topicARN;
    }

    public static void setTopicARN(String topicARN) {
        Constants.topicARN = topicARN;
    }

    public static String getAWS_AccessKey() {
        return AWS_AccessKey;
    }

    public static void setAWS_AccessKey(String AWS_AccessKey) {
        Constants.AWS_AccessKey = AWS_AccessKey;
    }

    public static String getAWS_SecretKey() {
        return AWS_SecretKey;
    }

    public static void setAWS_SecretKey(String AWS_SecretKey) {
        Constants.AWS_SecretKey = AWS_SecretKey;
    }

    public static String getAWS_BucketName() {
        return AWS_BucketName;
    }

    public static void setAWS_BucketName(String AWS_BucketName) {
        Constants.AWS_BucketName = AWS_BucketName;
    }
}
