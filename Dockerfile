FROM node:buster-slim

WORKDIR ./

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]