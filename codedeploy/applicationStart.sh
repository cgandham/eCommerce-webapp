#!/usr/bin/env bash
sudo systemctl start tomcat.service
sleep 5
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl \
    -a fetch-config \
    -m ec2 \
    -c file:/opt/cloudwatch/cloudwatch-config.json -s