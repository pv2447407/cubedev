FROM cubejs/cube:latest

# Install additional dependencies for schema generation
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /cube/conf

# Copy package files
COPY package*.json ./

# Install dependencies and rebuild native modules
RUN npm ci --only=production && \
    npm rebuild

# Copy application files
COPY . .

# Set proper permissions for keys
RUN chmod 600 /cube/conf/keys/rsa_key.p8 2>/dev/null || true

EXPOSE 4000 3000

CMD ["node", "/cube/conf/index.js"]