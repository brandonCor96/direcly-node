FROM node:alpine

RUN mkdir /direcly-node

WORKDIR /direcly-node

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]