FROM node:14.1.0-alpine

COPY dist dist
COPY package*.json ./

RUN npm install --only=prod
RUN npm install -g wait-for-it.js

EXPOSE 80


CMD node dist