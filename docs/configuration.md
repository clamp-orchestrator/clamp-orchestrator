---
id: configuration
title: Configuration
sidebar_label: Configuration
---

The following sections cover detailed usage details and specifications for the JSON configuration used to describe workflows. Before we begin, let's go over a few basic concepts:
- **Workflow**: A workflow is a series of steps executed in a set order to achieve a specific function, such as booking an order, renewing a license, scheduling an appointment, and so forth. In a microservices setup, each step will be taken up by a different µ-service catering to something specific. Clamp is able to understand and execute such workflows given a JSON configuration according to the given specification.
- **Step**: A step is the smallest unit in a workflow. A step can be used to execute a specific function. A step can execute in 2 modes SYNC & ASYNC. Step can be integrated with HTTP API / Kafka / Rabbit MQ. Step can be conditionally executed and the request for the step can be transformed in runtime.
    - **Step Modes**: Sync step is a type of step where clamp expects a response after executing it. Async step is a step where the response can be deferred, the downstream service can send back the response latter in time.
- **Service Request**: A service request is an asynchronous call made to Clamp, telling it to execute a specific workflow. Depending on the nature of the workflow, a service request might contain a payload or not. Upon creation of service requests, their state can be monitored via their service request IDs.
- **Context Object**: In the process of executing a workflow, a context object will store the request and respose of each step. This request context can be used in step for conditional executing it or transforming the request to the step.

### Pre-requisites

#### Data Store
Clamp makes use of a data store to keep track of workflows, service requests and payloads while orchestrating between µ-services. Right now, the only data store supported is [PostgreSQL](https://www.postgresql.org/). You can connect Clamp to your own Postgres setup by configuring it in `config/env.go`.
```
DBConnectionStr string `env:"CLAMP_DB_CONNECTION_STR" envDefault:"host=<ip_address>:<port> user=<user_name> dbname=<db_name> password=<password>"`
```
#### Message Broker
A message broker is required to facilitate async communication between Clamp and all the µ-services in your environment if you choose to not communicate over HTTP. Clamp ships with integrations for RabbitMQ and Kafka. These are also configured the same way as above with the data store, by editing `config/env.go`.
- AMQP
```
QueueConnectionStr string `env:"CLAMP_QUEUE_CONNECTION_STR" envDefault:"amqp://<user_name>:<password>@<ip_address>:<port>/"`
```
- Kafka
```
KafkaConnectionStr string `env:"CLAMP_KAFKA_CONNECTION_STR" envDefault:"<ip_address>:<port>"`
```