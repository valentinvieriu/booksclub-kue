FROM node:8.4.0-alpine
WORKDIR /usr/src/app
ADD package-lock.json package-lock.json
ADD package.json package.json
RUN npm install

ADD . .

EXPOSE 9000
CMD node --optimize_for_size --max_old_space_size=460 --gc_interval=100 app.js