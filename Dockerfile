FROM node:4.5.0

WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install

WORKDIR /usr/src/
COPY . /usr/src/
RUN cp -a /tmp/node_modules /usr/src/
RUN npm run build

ENV NODE_ENV=production
ENV PORT=4000

CMD [ “/usr/local/bin/node”, “./index.js” ]
EXPOSE 4000