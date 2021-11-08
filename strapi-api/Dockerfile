FROM node:12-alpine

WORKDIR '/usr/src/app'

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install --production

COPY . .

EXPOSE 3006

CMD yarn build && yarn start
