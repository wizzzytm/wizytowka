FROM node:26-alpine as builder
WORKDIR /wizytowka
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine as server
WORKDIR /wizytowka
COPY --from=builder /wizytowka/dist /usr/share/nginx/html
