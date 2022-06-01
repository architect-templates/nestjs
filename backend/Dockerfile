FROM node:16-alpine

RUN apk add curl

WORKDIR /usr/src/app

COPY package*.json tsconfig*.json ./
RUN npm ci

COPY src/ src/
RUN npm run build
RUN rm -r src

CMD ["npm", "run", "start"]
