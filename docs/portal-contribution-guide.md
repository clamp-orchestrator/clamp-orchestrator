---
id: portal-contribution-guide
title: Contribution guide - Clamp Portal
sidebar_label: Clamp portal
---

[Clamp-portal](https://github.com/clamp-orchestrator/clamp-portal) is the core orchestrator library. It is written in go-lang and the artifact is published as a docker image. All orchestration related changes need to be made in [clamp-core](https://github.com/clamp-orchestrator/clamp-core) repository.

## Contributing

To contribute to the project follow the following steps

### Dependencies

To build and run clamp portal you should have following dependencies installed


### Fork & clone project locally

- Fork the project into your own github repo.
- Clone the project locally

### Run docker locally

Follow the installation instructions outlined in the installation doc [here](installation).

### Running tests locally


### Pull request completeness check

Once you have made changes in the code please create a pull request and ensure following things have been taken care of. 

* Code changes should have proper tests (unit & integrations as applicable)
* Documentation has been added/updated. Both in the code alongside functions as well as in [clamp-documentation](https://github.com/clamp-orchestrator/clamp-orchestrator) repository
* Git commit message should have enough details around the changes made and context
* Attach pull request to the right issues in the issue list

## Feature backlog

We actively curate our feature backlog and all enhancements, issues, suggestions are housed in our project view. The [project view](https://github.com/orgs/clamp-orchestrator/projects/1) combine issues and enhancements from all clamp ecosystem repositories. Issues are also tagged with helpful tags to assist folks who are contributing to Clamp ecosystem for the first time. 

If there is an issue/suggestion that you would like to report please add it to the issue backlog of the relevant repository. ([Core](https://github.com/clamp-orchestrator/clamp-core/issues), [Portal](https://github.com/clamp-orchestrator/clamp-portal/issues), [Docs](https://github.com/clamp-orchestrator/clamp-orchestrator/issues))

## Raising PR for an new/existing issues

If you would like to provide a solution for an existing issue/enhancement, please raise a pull request against the ticket and someone will review and provide feedback or merge it back to the repository. Please ensure that completeness check is adhered to as listed above. 