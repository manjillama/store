## Project introduction

Yatri Motorcycles e-store platform built using Strapi for backend and next.js for frontend

- MySQL as a database
- Next.js for frontend
- Strapi v3 for backend

## Server setup

- Navigate to `strapi-api` folder. Copy the `.env.example` and save as `.env`. Update the variables. In the project directory, you can run:

```bash
  yarn install
  yarn develop
```

Runs the app in the development mode.\
Open [http://localhost:3008](http://localhost:3008) to view it in the browser.

## Site setup

- Navigate to `app` folder. Copy the `.env.example.local` and save as `.env.local`. Update the variables. In the project directory, you can run:

```bash
  yarn install
  yarn dev
```

Runs the app in the development mode.\
Open [http://localhost:3005](http://localhost:3005) to view it in the browser.

## All-in-one production setup (docker)

- Run `docker-compose -f docker-compose.prod.yml up` from the root folder to run all the applications at once. To run a specific application use `docker-compose -f docker-compose.prod.yml up <service_name>`. To run the application in background, use `docker-compose -f docker-compose.prod.yml up -d <service_name>`. The logs can be seen through `docker-compose -f docker-compose.prod.yml logs`.

- Checkout the applications through `http://localhost:<PORT>`.

- Run `docker-compose ps` from the root folder to check the status of the containers.

- You can also execute the commands as usual by entering into the container: `docker-compose exec <service_name> bash`. It gives a bash shell.
