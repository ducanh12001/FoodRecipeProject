FROM node:16 as build-deps

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

FROM nginx:1.23.1-alpine
COPY --from=build-deps /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]