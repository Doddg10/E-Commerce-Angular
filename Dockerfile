# stage 1:
FROM node:23.10.0-alpine3.21 AS build

WORKDIR /app

# copy package files first for better caching
COPY package.json package-lock.json ./
RUN npm ci 

# copy rest of app
COPY . .
RUN npm run build 

# stage 2
FROM nginx:1.27.4-alpine3.21

# change directries permissions
RUN chmod 770 /var/cache/nginx/
RUN chmod 770 /var/run/

# remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# copy built Angular files from stage 1
COPY --from=build /app/dist/client/browser/ /usr/share/nginx/html/

# Copy our custom nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
