# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /labauve_website

# add `/labauve_website/node_modules/.bin` to $PATH
ENV PATH /labauve_website/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN yarn install
RUN yarn global add react-scripts@3.4.1 

# add app
COPY . ./

# start app
CMD ["npm", "start"]
