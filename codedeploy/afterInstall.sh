#!/bin/bash
echo "Running after install script"
cd /home/ubuntu/webapp
sudo chown -R ubuntu:ubuntu /home/ubuntu/*
sudo chmod +x WebServer-1.0-SNAPSHOT.jar

#Kill application if already running
kill -9 $(ps -ef|grep WebServer-1.0 | grep -v grep | awk '{print $2}')

echo "Running application and appending logs"
nohup java -jar WebServer-1.0-SNAPSHOT.jar > /home/ubuntu/webapp.log 2> /home/ubuntu/webapp.log < /home/ubuntu/webapp.log &
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -c file:/home/ubuntu/webapp/AmazonCloudWatchConfig.json -s

echo "Scheduling job to run after reboot"
#write out current crontab
crontab -l > mycron
#echo new cron into cron file
echo "@reboot java -jar /home/ubuntu/webapp/WebServer-1.0-SNAPSHOT.jar > /home/ubuntu/webapp.log 2> /home/ubuntu/webapp.log < /home/ubuntu/webapp.log &" >> mycron
#install new cron file
crontab mycron
rm mycron

