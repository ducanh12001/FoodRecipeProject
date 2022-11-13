FROM node:16-alpine as builder

RUN mkdir /app

ENV NODE_ENV=production

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.19.0
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./.docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
