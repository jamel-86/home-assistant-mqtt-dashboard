FROM node:18-slim

# Install necessary packages
RUN apt-get update && apt-get install -y bash git

# Set environment variables
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy Next.js app
COPY . .

# Install dependencies
RUN npm install

# Build the Next.js app and log output, ignoring lint errors
RUN npm run build > build.log 2>&1 || { cat build.log; exit 1; }

# Expose the port
EXPOSE 3000

# Run the Next.js app
CMD ["npm", "start"]