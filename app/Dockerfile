FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN apk --no-cache add curl

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3005

CMD npm run build && npm run start
