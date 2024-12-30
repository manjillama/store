Install docker

### Development

```
cd store
docker-compose up
```

Use `Dev Container` VS Code extension to use docker container as a full-featured development environment.
https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers

### Production

```
cd store
docker-compose -f docker-compose.prod.yml up
```

### Note idk..

In the collection section the product is matched using the collection slug name.

Add your image source hostname to `next.config.js` inside `app` directory.
https://github.com/vercel/next.js/discussions/18311
