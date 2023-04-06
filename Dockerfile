FROM node:18-alpine

WORKDIR /usr/src/app

RUN echo -e "\
NEXT_PUBLIC_APIURL=http://ab-aggregator/\n\
NEXT_PUBLIC_CHANNELDOMAIN=https://us.ab-dev.retisio.com\n\
NEXT_PUBLIC_IMAGEPATH=/dam/AB\n\
NEXT_PUBLIC_YOTPO_KEY=Xzwy9124YJ6LKTkJdWTSfw6Vij93GMnCjDzxdi9t\n\
NEXT_PUBLIC_GA_KEY=GTM-NLXT83\n\
NEXT_PUBLIC_LISTRACK_MID=LhfaAOez5ttd\n\
" > .env.production

COPY . .
RUN npm install
RUN npm run build


CMD [ "npm", "start"]