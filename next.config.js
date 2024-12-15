#!/bin/bash

# Strict error handling
set -euo pipefail

# Print environment info
echo "Build Environment:"
echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

# Set memory limit
export NODE_OPTIONS='--max_old_space_size=4096'

# Clean npm cache
npm cache clean --force

# Remove existing node_modules
rm -rf node_modules

# Install dependencies
npm install

# List pages for verification
echo "Available Pages:"
find pages -type f -name "*.js"

# Run build with verbose output
npm run build

# Verify build output
echo "Build Output:"
ls -la .next/server/pages
