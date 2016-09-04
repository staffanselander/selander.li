FROM node:argon

RUN mkdir -p /usr/src/selanderli
WORKDIR /usr/src/selanderli

COPY . /usr/src/selanderli

RUN npm install && npm run postinstall
RUN npm run build

VOLUME ["/usr/src/selanderli"]