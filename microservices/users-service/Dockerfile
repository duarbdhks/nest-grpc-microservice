FROM node:16-alpine as build

WORKDIR /usr/local/app

COPY dist package.json ./

RUN npm install --production

FROM node:16-alpine

WORKDIR /usr/local/app

COPY --from=build /usr/local/app .

EXPOSE 50051

CMD ["node", "main.js"]
