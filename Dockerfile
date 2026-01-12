# Stage 1: Base - Common dependencies layer
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --quiet

# Stage 2: Development - Vite dev server with hot reload
FROM base AS development
ENV NODE_ENV=development
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Stage 3: Build - Production build artifacts
FROM base AS build
COPY . .
RUN npm run build

# Stage 4: Production - Nginx serving static files
FROM nginx:1.25-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
