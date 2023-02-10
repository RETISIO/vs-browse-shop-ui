FROM node:14.19.3-alpine as builder

# install and cache app dependencies
COPY package.json package-lock.json next.config.js config.js .eslintrc.json .npmrc nginx ./


RUN npm install && mkdir /frontend && mv ./node_modules ./frontend

WORKDIR /frontend

RUN echo -e "\
NEXT_PUBLIC_APIURL=http://ab-aggregator/\n\
NEXT_PUBLIC_CHANNELID=AB\n\
NEXT_PUBLIC_CHANNELDOMAIN=http://us.ab-dev.retisio.com\n\
" > .env.production

COPY . .


RUN npm run build
#RUN npm run start


# ------------------------------------------------------
# Production Build
# ------------------------------------------------------
FROM nginx:1.22.0-alpine

RUN apk add --no-cache --update \
      apache2-utils
COPY --from=builder /frontend/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf /etc/nginx/nginx.conf && mkdir /usr/share/nginx/html/medias
COPY nginx/appnginx.conf /etc/nginx/conf.d
COPY nginx/nginx.conf /etc/nginx/
COPY robots.txt /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
