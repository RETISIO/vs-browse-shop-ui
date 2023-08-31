# Install dependencies only when needed
FROM node:18-alpine AS deps
ARG NPM_TOKEN
WORKDIR /usr/src/app
COPY package.json ./
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN \n"\ 
        "@retisio:registry=https://npm.pkg.github.com \n"\ 
        "always-auth=true"\
        >> .npmrc
COPY .npmrc ./
Run npm install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /usr/src/app
COPY . .
COPY --from=deps /usr/src/app/node_modules ./node_modules
Run npm run build
# Production image, copy all the files and run next
FROM node:18-alpine AS runner

WORKDIR /usr/src/app
ENV NODE_ENV production

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /usr/src/app/next.config.js ./
COPY --from=builder /usr/src/app/public ./public
#COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json
COPY entrypoint.sh .
COPY .env.production .
# Execute script
RUN apk add --no-cache --upgrade bash
RUN ["chmod", "+x", "./entrypoint.sh"]
ENTRYPOINT ["./entrypoint.sh"]

#EXPOSE 3000
#ENV PORT 3000

CMD ["node_modules/.bin/next", "start"]
