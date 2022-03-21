<p align="center">
  <a href="//architect.io" target="blank"><img src="https://docs.architect.io/img/logo.svg" width="320" alt="Architect Logo" /></a>
</p>

<p align="center">
  A dynamic microservices framework for building, connecting, and deploying cloud-native applications.
</p>

---

# Running NestJS on Architect

This example will show you the use-case for using TypeScript on Architect leveraging the NestJS tutorial application – [Users](https://github.com/nestjs/nest/tree/master/sample/05-sql-typeorm). In this example, we've written a component spec (the `architect.yml` file) that defines a component to run a TypeScript-based web application.

[Learn more about the architect.yml file](//docs.architect.io/configuration)

## Running locally

Architect component specs are declarative, so it can be run locally or remotely with a single deploy command:

```sh
# Clone the repository and navigate to this directory
$ git clone https://github.com/architect-team/architect-cli.git
$ cd ./architect-cli/examples/nestjs

# Register the component to the local registry
$ architect link .

# Deploy using the dev command
$ architect dev examples/nestjs -e local
```

Once the deploy has completed, you can reach your new service by going to http://api.arc.localhost/users. In order to create a new user, you can use the command below:

```sh
curl --location --request POST 'http://api.arc.localhost/users' --header 'Content-Type: application/json' --data-raw '{
    "firstName": "test",
    "lastName": "user"
}'
```

## Deploying to the cloud

Want to try deploying this to a cloud environment? Architect's got you covered there too! Just click the button below to deploy it to a sample Kubernetes cluster powered by Architect Cloud:

[![Deploy Button](https://docs.architect.io/deploy-button.svg)](https://cloud.architect.io/examples/components/nestjs/deploy?tag=latest&interface=api%3Aapi)

Alternatively, if you're already familiar with Architect and have your own environment registered, you can use the command below instead:

```sh
$ architect deploy examples/nestjs:latest -a <account-name> -e <environment-name> -i api:api
```
