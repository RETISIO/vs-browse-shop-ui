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
CMD ["npm", "start"]

