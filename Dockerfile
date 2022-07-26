FROM node:18.4.0-alpine3.16

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD serve -s build
