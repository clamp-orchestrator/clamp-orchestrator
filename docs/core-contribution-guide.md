---
id: core-contribution-guide
title: Contribution guide - Clamp Core
sidebar_label: Clamp core
---

[Clamp-core](https://github.com/clamp-orchestrator/clamp-core) is the core orchestrator library. It is written in go-lang and the artifact is published as a docker image. All orchestration related changes need to be made in [clamp-core](https://github.com/clamp-orchestrator/clamp-core) repository.

## Contributing

To contribute to the project follow the following steps

### Dependencies

To build and run clamp you should have following dependencies installed

* Docker _required_
* Postgres _required_
* RabbitMQ _optional_
* Kafka _optional_
* CircleCI CLI _optional_ [Installation instructions here](https://circleci.com/docs/2.0/local-cli/)

### Fork & clone project locally

- Fork the project into your own github repo.
- Clone the project locally

### Run docker locally

Follow the installation instructions outlined in the installation doc [here](installation).

### Running tests locally

There are two ways to run the tests locally. 

Execute the following command directly on the console in the project directory. To run tests using this command you must have following services running locally
* Docker
* Postgres
* RabbitMQ 
* Kafka
* Zookeeper _(required by kafka setup)_

`gotestsum -- clamp-core/executors clamp-core/models clamp-core/services`

Execute the circleci cli command to pull respective docker images and run the command as it would execute on the circle ci infrastructure. This makes it easy to debug issues when the tests are passing locally but are failing on circle ci infrastructure. This does not require any components to be setup for the test run.   

`./runTest.sh`

or

`circleci local execute --job test -e LOCALCI=true`

### Pull request completeness check

Once you have made changes in the code please create a pull request and ensure following things have been taken care of. 

* Code changes should have proper tests (unit & integrations as applicable)
* Documentation has been added/updated. Both in the code alongside functions as well as in [clamp-documentation](https://github.com/clamp-orchestrator/clamp-orchestrator) repository
* Git commit message should have enough details around the changes made and context
* Attach pull request to the right issues in the issue list
* Ensure that test and builds are passing in [CircleCI](https://app.circleci.com/pipelines/github/clamp-orchestrator) dashboard for your commit pipeline

## Feature backlog

We actively curate our feature backlog and all enhancements, issues, suggestions are housed in our project view. The [project view](https://github.com/orgs/clamp-orchestrator/projects/1) combine issues and enhancements from all clamp ecosystem repositories. Issues are also tagged with helpful tags to assist folks who are contributing to Clamp ecosystem for the first time. 

If there is an issue/suggestion that you would like to report please add it to the issue backlog of the relevant repository. ([Core](https://github.com/clamp-orchestrator/clamp-core/issues), [Portal](https://github.com/clamp-orchestrator/clamp-portal/issues), [Docs](https://github.com/clamp-orchestrator/clamp-orchestrator/issues))

## Raising PR for an new/existing issues

If you would like to provide a solution for an existing issue/enhancement, please raise a pull request against the ticket and someone will review and provide feedback or merge it back to the repository. Please ensure that completeness check is adhered to as listed above. 