#!/bin/bash

# Enable verbose output and exit on first error
set -ex

#Print Node.js and npm versions
node --version
npm --version

# Clear npm cache
npm cache clean --force

# Remove existing node_modules and package-lock.json
rm -rf node_modules
rm -f package-lock.json

# Install dependencies with exact versions
npm install --save-exact

# Build the project
npm run build

# Verify build output
ls -la .next