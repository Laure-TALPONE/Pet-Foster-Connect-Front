FROM node:20-alpine

WORKDIR /frontend

COPY package.json package-lock.json ./

COPY . .

CMD ["npm", "run", "dev"]
