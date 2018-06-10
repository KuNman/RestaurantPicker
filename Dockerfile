FROM node:latest

RUN mkdir /app
WORKDIR /app
COPY package.json /app/

RUN npm install
RUN npm install dotenv

CMD [ "npm", "start" ]
