FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=3003

CMD ["npm", "run", "dev"]
