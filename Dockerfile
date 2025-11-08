# syntax=docker/dockerfile:1

FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies based on lockfile for repeatable builds
COPY package*.json ./
RUN npm install

# Copy the application code and create the production build
COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
