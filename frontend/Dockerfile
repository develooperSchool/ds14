FROM node:18-alpine
WORKDIR /react-docker/
COPY . /react-docker/
RUN npm install --legacy-peer-deps
EXPOSE 8080
CMD ["npm", "start"]