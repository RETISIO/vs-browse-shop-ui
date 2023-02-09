FROM node:10-alpine as builder

# install and cache app dependencies
COPY package.json package-lock.json next.config.js config.js .eslintrc.json .npmrc nginx ./

RUN echo -e "\
NEXT_PUBLIC_APIURL=http://ab-aggregator/\n\
NEXT_PUBLIC_CHANNELID=AB\n\
NEXT_PUBLIC_CHANNELDOMAIN=http://us.ab-dev.retisio.com\n\
" > .env

RUN npm install && mkdir /frontend && mv ./node_modules ./frontend

WORKDIR /frontend

COPY . .


RUN npm run build
RUN npm run start


# ------------------------------------------------------
# Production Build
# ------------------------------------------------------
FROM nginx:1.22.0-alpine

RUN apk add --no-cache --update \
      apache2-utils
COPY --from=builder /app/web-react/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf /etc/nginx/nginx.conf

COPY nginx/appconfig.conf /etc/nginx/conf.d
COPY nginx/nginx.conf /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
