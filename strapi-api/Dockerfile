FROM node:12-alpine

WORKDIR '/usr/src/app'

COPY ./package.json ./
COPY ./yarn.lock ./

RUN apk add --no-cache --virtual .gyp \
  python \
  make \
  g++ \
  && yarn \
  && apk del .gyp

COPY . .

EXPOSE 3006

CMD yarn build && yarn start
