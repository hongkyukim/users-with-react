FROM node:10
EXPOSE 3000
WORKDIR /app

COPY . .
RUN npm --unsafe-perm ci
RUN npm install
##RUN npm run build
# Default use case for this container will be prod till overriden
##ENV NODE_ENV production

##CMD node src/index.js --env docker;
CMD npm start