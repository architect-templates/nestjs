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

# Running NestJS on Architect

This example will show you the use-case for using TypeScript on Architect leveraging the NestJS tutorial application – [Users](https://github.com/nestjs/nest/tree/master/sample/05-sql-typeorm). In this example, we've written a component spec (the `architect.yml` file) that defines a component to run a TypeScript-based web application.

[Learn more about the architect.yml file](//docs.architect.io/components/architect-yml/)

## Running locally

Architect component specs are declarative, so it can be run locally or remotely with a single deploy command:

```sh
# Clone the repository and navigate to this directory
$ git clone https://github.com/architect-templates/nestjs.git
$ cd ./nestjs

# Register the component to the local registry
$ architect link .

# Deploy locally using the dev command
$ architect dev .
```

Once the deploy has completed, you can reach your new service by going to https://api.localhost.architect.sh/users. In order to create a new user, you can use the command below:

```sh
curl --location --request POST 'https://api.localhost.architect.sh/users' --header 'Content-Type: application/json' --data-raw '{
    "firstName": "test",
    "lastName": "user"
}'
```
