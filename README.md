# Project Setup Guide

## Requirements

- Docker
- Remote MySQL > v8.\* (Update docker-compose file and api/.env to use local MySQL db)

## Tech stacks

- Next.js 11
- Strapi 5
- MySQL v8
- AWS s3
- Sendgrid

## Setup

Clone this repository and change directory

```
cd store
```

## Setup API Server

From the root project directory:

1. Navigate to the `api` directory:

   ```sh
   cd api
   ```

2. Copy the example environment variables file:

   ```sh
   cp .env.example .env
   ```

3. Update the environment variables in the `.env` file as needed.

**Note for API Server:**

- This project uses AWS S3 to store assets (product images). Ensure that Bucket ACLs are enabled and the bucket policy is set to public.

- For images/media hosted on a different domain, add the domain inside the `contentSecurityPolicy.directives` in the [`api/config/middlewares.js`](api/config/middlewares.js) file.

## Setup App Server (Front-end)

From the root project directory:

1. Navigate to the `app` directory:

   ```sh
   cd app
   ```

2. Copy the example environment variables file:

   ```sh
   cp .env.local.example .env.local
   ```

3. Update the environment variables in the `.env.local` file as needed.

**Note for App Server:**

- If you are using an image source URL hosted on a different domain, add your image source hostname to `next.config.js` inside the `app` directory. For more details, refer to this [discussion](https://github.com/vercel/next.js/discussions/18311).

## Start Development Server

From the root project directory:

```sh
docker-compose up
```

- Navigate to [http://localhost:3005/](http://localhost:3005/) for the client-side app.
- Navigate to [http://localhost:1337/admin](http://localhost:1337/admin) for the admin site.

Use `Dev Container` VS Code extension to use docker container as a full-featured development environment.
https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers

### Production

```
cd store
docker-compose -f docker-compose.prod.yml up
```
