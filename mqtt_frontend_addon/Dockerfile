FROM node:18-alpine

# Install dependencies
RUN apk add --no-cache bash git

# Set environment variables
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy Next.js app
COPY . .

# Copy AppArmor profile
COPY apparmor.txt /etc/apparmor.d/

# Install Next.js dependencies
RUN npm install

# Build the Next.js app and log output
RUN npm run build || { cat npm-debug.log; exit 1; }

# Expose the port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
