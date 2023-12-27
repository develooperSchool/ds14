FROM node:18-alpine
WORKDIR /react-docker/
COPY . /react-docker/
RUN npm install --legacy-peer-deps
EXPOSE 3000
CMD ["npm", "start"]