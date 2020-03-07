FROM node:10

WORKDIR /app

COPY . .
RUN npm --unsafe-perm ci

EXPOSE 8080
CMD ["node", "src/index.js"]
