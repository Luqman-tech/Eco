#!/bin/bash

# Ensure npm and node are installed
npm install -g npm@latest

# Clear npm cache
npm cache clean --force

# Install project dependencies
npm ci

# Build the project
npm run build

# Optional: Add verbose logging
npm run build --verbose