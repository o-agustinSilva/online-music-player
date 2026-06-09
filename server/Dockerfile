FROM node:20-alpine

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install dependencies in a clean, reproducible manner
RUN npm ci

# Copy project source files
COPY . .

# Expose server listening port
EXPOSE 3500

# Execute server application
CMD ["node", "server.js"]
