FROM node:alpine

WORKDIR /study/web

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["yarn","dev"]