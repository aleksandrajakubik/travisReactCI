FROM node:alpine AS builder
WORKDIR /opt/app
ENV PATH opt/app/node_modules/.bin:$PATH
COPY ./package.json ./
RUN yarn install
COPY ./ ./
RUN yarn build

FROM nginx
COPY --from=builder /opt/app/build /usr/share/nginx/html