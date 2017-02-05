FROM node:boron

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

RUN npm run build

EXPOSE 9000

CMD node server.js
