# webapp
To deploy,run and manage web applications

#Tools Used
IntelliJ, Visual Studio Code, Mysql, Postman, Mysql workbench.

#Installations
Java,Nodejs,Angularjs,Bootstrap,jquery

#Run the Project
Parent project - webapp
Create a database named "webapp"
Create a user say "admin" and grant all permissions on webapp schema.
1. mvn clean and mvn install on webapp proj
2. run severapplication

# CI/CD Pipeline
CircleCi triggers build for every commit in the repo. Deploys the jar in the EC2 instance using S3 bucket.

# To import certificate in ACM -->
aws acm import-certificate --certificate fileb://certificate.pem --certificate-chain fileb://intermediary.pem --private-key fileb://privateKey.pem
