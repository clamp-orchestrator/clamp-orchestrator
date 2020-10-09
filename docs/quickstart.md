---
id: quickstart
title: Quickstart
sidebar_label: Quickstart
---

Once you've cloned the [project](https://github.com/clamp-orchestrator/clamp-core) to your host, we can now start Clamp. Easy! Navigate to the directory in which you cloned the project. Run the following commands from this directory.     

    docker-compose up -d

The  docker-compose command will pull (zookeeper, kafka, rabbitMQ, postgres) images from Docker Hub and then link them together to Clamp.  

After the command completes we can now view the status of Clamp.

    docker-compose ps

Run the following command to stop Clamp and its dependencies

    docker-compose down
