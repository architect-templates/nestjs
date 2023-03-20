<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://cdn.architect.io/logo/horizontal-inverted.png">
    <source media="(prefers-color-scheme: light)" srcset="https://cdn.architect.io/logo/horizontal.png">
    <img width="320" alt="Architect Logo" src="https://cdn.architect.io/logo/horizontal.png">
  </picture>
</p>

<p align="center">
  A dynamic microservices framework for building, connecting, and deploying cloud-native applications.
</p>

---

<p align="center">
  <a href="//nestjs.com" target="blank"><img src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" width="320" alt="NestJS Logo" /></a>
</p>

---

# NestJS Starter Project
[NestJS](https://nestjs.com/) is a progressive Node.js framework for building efficient, reliable and scalable server-side applications.

This starter application will show how easy it is to deploy an application both locally and in a remote environment.

## Pre-reqs
* Install [Docker](https://docs.docker.com/get-docker/) and make sure it's running
* Install the [Architect CLI](https://github.com/architect-team/architect-cli)
* [Sign up for a free Architect account](https://cloud.architect.io/signup)

## Clone the repo
You can clone this repo yourself or use the `architect init` command to use this project.

### Use `architect init`
You can clone this repo locally using the `architect init` command. A drop-down list of Starter Projects is
displayed for you to select from.

```bash
%architect init
? What is the name of your project? my-starter-project
? Please select a framework/language for your project NestJS

######################################
##### Let's set up your project! #####
######################################

Creating project directory... ✓
Pulling down GitHub repository... ✓ nestjs

Successfully created project my-starter-project.

Your project is ready to be deployed by Architect!
To deploy locally, run:
  architect dev my-starter-project/architect.yml
```

```sh
$ architect init nestjs
$ cd ./nestjs
```

### Clone it yourself
Run the following command to clone the repo yourself:

```sh
# Clone the repository and navigate to this directory
$ git clone git@github.com:architect-templates/nestjs.git
$ cd ./nestjs
```

## Run Locally
Once the repo has been cloned to your local machine, execute the following command from the `nestjs` directory to run it locally:

```sh
$ architect dev .
```

When this command completes, you can reach your new application at https://app.localhost.architect.sh.
### Make your own changes

This application's `architect.yml` file contains a `debug` block that enables hot-reloading for each service
within the component. That means you can make changes to the source code, which will automatically apply to the environment. This lets you quickly iterate and see your changes without restarting the
application stack.

Give it a try! Search inside your project for "Favorite Movie” and change this string to “Favorite Pizza.” Once you saved
the file, you’ll see the frontend service recompiling in the logs, and then your browser window will update automatically.

## Deploy to the Cloud
Do you want to try deploying this application to a cloud environment? Architect's got you covered there, too!
We offer free preview environments in our community cloud where you can deploy your applications
before deploying to staging or prod. This is an excellent opportunity for testing and getting early feedback before merging
your code. You can [configure your GitOps](https://docs.architect.io/tutorial/creating-a-component)
to automatically deploy every PR to Architect's community cloud.

### Create an environment

To create a new environment on Architect's
free cloud, run the following command:

```sh
architect environments:create my-first-environment
```
This command presents you with a list of Kubernetes clusters. Since you haven't added external clusters to your
account, you should only see `architect`. Hit enter to create your environment on Architect's community cloud.

```sh
? Select a cluster (Use arrow keys or type to search)
❯  architect
```
When the command completes, you should see output similar to the following:
```sh
%architect environments:create my-first-environment
? Select a cluster architect
Registering environment with Architect... done
Environment created: https://cloud.architect.io/<account-name>/environments/my-first-environment
```

### Deploy your component

You are now ready to deploy your component to your environment in Architect's community cloud. To deploy your component,
run the following command from the `nestjs` directory:

```sh
architect deploy --account <account-name> \
--environment my-first-environment ./architect.yml
```
Congrats! You've deployed your first component using Architect.