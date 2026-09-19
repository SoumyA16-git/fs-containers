FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

USER node

ENV PORT=3003

CMD ["npm", "start"]
