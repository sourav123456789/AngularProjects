#stage 1
#use a base image
FROM node:lts
#set a working directory
WORKDIR /app
#copy package.json
COPY package.json ./
#download dependencies and install
RUN npm install
COPY . .
EXPOSE 4200
CMD ["npm",  "run" , "start"]  
#stage 2
#FROM nginx:alpine
#COPY --from=node /app/dist/my-first-app /usr/share/nginx/html