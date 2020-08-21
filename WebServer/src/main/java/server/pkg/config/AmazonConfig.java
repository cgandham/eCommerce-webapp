package server.pkg.config;

import com.timgroup.statsd.NoOpStatsDClient;
import com.timgroup.statsd.NonBlockingStatsDClient;
import com.timgroup.statsd.StatsDClient;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import server.pkg.utils.Constants;

import javax.sql.DataSource;

//@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
//@EnableTransactionManagement
@Configuration
@PropertySource("classpath:database.properties")
public class AmazonConfig {
    @Value("${username}")
    public String username;
    @Value("${password}")
    public String password;
    @Value("${rdsinstance}")
    public String rdsinstance;
    @Value("${s3bucketname}")
    public String s3bucketname;
    @Value("${ACCESS_KEY}")
    public String accesskey;
    @Value("${SECRET_KEY}")
    public String secretkey;

    public boolean publishMetrics = true;
    @Bean
    public StatsDClient metricsClient() {

        if (publishMetrics) {
            return new NonBlockingStatsDClient("csye6225", "localhost", 8125);
        }

        return new NoOpStatsDClient();
    }

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();

        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        dataSource.setUsername("admin");
        dataSource.setPassword("very_strong_password");
        rdsinstance = "csye6225-su2020.c8uyfa7tv0ms.us-east-1.rds.amazonaws.com";
        //  dataSource.setUrl("dbc:mysql://localhost:3306/webapp?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC");
        //Constants.setAWS_AccessKey(accesskey);//accesskey;
        //Constants.setAWS_SecretKey(secretkey);//secretkey;
        //Constants.setAWS_BucketName(s3bucketname);//;
        //Constants.setAWS_AccessKey("AKIAIOG2BPXRCPK5RPMQ");//dev;
        //Constants.setAWS_SecretKey("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");//dev;
        Constants.setAWS_AccessKey("AKIAIR33AVDXDQS5OGTA");//PROD;
        Constants.setAWS_SecretKey("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");//PROD;
        Constants.setAWS_BucketName("webapp.chandana.gandham");//;
        dataSource.setUrl("jdbc:mysql://" + rdsinstance + "/webapp?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC");
        // dataSource.setUrl("jdbc:mysql://csye6225-su2020.c8uyfa7tv0ms.us-east-1.rds.amazonaws.com:3306/webapp?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC");

        return dataSource;
    }





}