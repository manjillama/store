FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 1337

CMD npm run build && npm run start
