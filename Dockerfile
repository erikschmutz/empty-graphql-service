FROM node:14.1.0-alpine

# Copies in the build directory
COPY dist dist

# Copies in the required installation files
COPY package*.json ./

# Installs the dependencies
RUN npm install --only=prod

EXPOSE 80
CMD node dist