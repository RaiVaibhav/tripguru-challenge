FROM node:8.9.4

RUN mkdir -p /code

ADD package.json /code
WORKDIR /code

RUN yarn install
ADD . /code
RUN yarn build
RUN yarn global add serve

EXPOSE 5000

CMD ["serve", "-s", "build"]
