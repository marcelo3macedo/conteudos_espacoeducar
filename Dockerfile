# Use the official Node.js image as the base image
FROM node:20-alpine AS base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies without running scripts
RUN npm ci --ignore-scripts

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN mkdir -p /app/.next && chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser

# Copy the rest of the application files
COPY data /app/data
COPY messages /app/messages
COPY public /app/public
COPY src /app/src
COPY next.config.mjs /app/next.config.mjs
COPY postcss.config.mjs /app/postcss.config.mjs
COPY tsconfig.json /app/tsconfig.json
COPY rewrites.json /app/rewrites.json
COPY tailwind.config.ts /app/tailwind.config.ts

ARG ENV_FILE=.env.production
COPY ${ENV_FILE} .env


# Build the Next.js application
RUN npm run build

# Use a smaller Node.js image for the final production image
FROM node:20-alpine AS production

# Set the working directory
WORKDIR /app

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Switch to the non-root user
USER appuser

# Copy only the necessary files for the production build
COPY --from=base /app/package*.json ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/data ./data
COPY --from=base /app/messages ./messages
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/next.config.mjs ./
COPY --from=base /app/tsconfig.json ./
COPY --from=base /app/tailwind.config.ts ./
COPY --from=base /app/.env .env

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
