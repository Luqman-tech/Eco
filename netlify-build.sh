#!/bin/bash

# Set strict error handling
set -euo pipefail

# Print environment information
echo "Build Environment:"
echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

# Set memory limit
export NODE_OPTIONS='--max_old_space_size=4096'

# Clean npm cache
npm cache clean --force

# Remove existing node_modules
rm -rf node_modules

# Install dependencies with exact versions
npm ci

# Verify configuration files
echo "PostCSS Configuration:"
cat postcss.config.js

echo "Next.js Configuration:"
cat next.config.js

# Verify styles directory
echo "Styles directory:"
ls -la styles

# List pages for verification
echo "Available Pages:"
find pages -type f -name "*.js"

# Run build with verbose output and error logging
npm run build || {
  echo "Build failed. Checking CSS file:"
  cat styles/globals.css
  exit 1
}

# Verify build output
echo "Build Output:"
ls -la .next/server/pages
