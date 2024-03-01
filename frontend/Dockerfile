FROM node:18-alpine
WORKDIR /code
COPY . /code
RUN npm install --legacy-peer-deps
EXPOSE 3000
CMD ["npm", "start"]
