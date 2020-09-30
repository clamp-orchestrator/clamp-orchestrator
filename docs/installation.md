---
id: installation
title: Installation
---

# Building from source
- Install GoLang on your system, instructions for various platforms can be found [here](https://golang.org/doc/install).
- Clone the [Clamp repository](https://gitlab.com/sahajsoft/clamp/clamp-core).
- `cd` into the project.
- Configure PostgreSQL, Kafka and RabbitMQ in *config/env.go* with your settings.
- Run `go get` to fetch and install all dependencies
- Run `go build main.go` to build the project.
- Run `./main migrate` to execute the migrations.
- Run `./main` to start the application.

Clamp runs on port 8080 by default, and exposes Swagger UI on `<your_url>/swagger/index.html`.

# Docker
- `cd` into the project.
- Configure PostgreSQL, Kafka and RabbitMQ in *config/env.go* with your settings.
- Run `docker build -t clamp-docker .` to build the image.
- Use `docker run --name=clamp-docker -d -p 9090:8080 clamp-docker` to spawn a container for Clamp.

To know more about how to configure PostgreSQL, Kafka and RabbitMQ, you can check [configuration section](configuration.md)