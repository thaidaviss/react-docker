FROM node:16.19 as build-stage

WORKDIR /react-with-docker/

COPY . .

RUN npm i yarn
RUN yarn
RUN yarn build

FROM nginx:1.17-alpine as production-stage


COPY --from=build-stage /react-with-docker/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]