FROM node:16-alpine

WORKDIR /usr/src/app

RUN echo -e "\
NEXT_PUBLIC_APIURL=http://ab-aggregator/\n\
NEXT_PUBLIC_CHANNELID=AB\n\
NEXT_PUBLIC_CHANNELDOMAIN=http://us.ab-dev.retisio.com\n\
" > .env.production

COPY . .
RUN npm install
RUN npm build


CMD [ "npm", "start"]