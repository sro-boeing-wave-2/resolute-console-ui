# base image
FROM node:8.9

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli

# add app
COPY . /usr/src/app
EXPOSE 4200

# start app
CMD ["npm", "start"]
