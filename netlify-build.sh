#!/bin/bash

# Ensure exact Node.js and npm versions
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use specified Node.js version
nvm install 18.18.0
nvm use 18.18.0

# Verify versions
node --version
npm --version

# Clear npm cache
npm cache clean --force

# Install dependencies
npm ci

# Build the project
npm run build
