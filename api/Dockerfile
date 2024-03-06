FROM node:18.13.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 2001

CMD ["npm", "run", "start:dev"]