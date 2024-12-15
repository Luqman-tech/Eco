#!/bin/bash

# Set strict error handling
set -euo pipefail

# Print environment information
echo "Node.js version:"
node --version

echo "npm version:"
npm --version

# Clear npm cache
npm cache clean --force

# Remove existing node_modules
rm -rf node_modules

# Install dependencies with exact versions
npm install --save-exact

# Build the project
npm run build

# Verify build output
ls -la .next
