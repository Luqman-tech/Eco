#!/bin/bash

# Set strict error handling
set -euo pipefail

# Print environment information
echo "Node.js version:"
node --version

echo "npm version:"
npm --version

# Increase memory limit for build
export NODE_OPTIONS='--max_old_space_size=4096'

# Clear npm cache
npm cache clean --force

# Remove existing node_modules
rm -rf node_modules

# Install dependencies
npm install

# List all pages to verify
echo "Listing pages:"
find pages -type f

# Build the project with verbose output
npm run build

# Verify build output
ls -la .next/server/pages
