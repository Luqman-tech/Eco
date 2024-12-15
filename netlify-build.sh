#!/bin/bash

# Set strict error handling
set -euo pipefail

# Print environment information
echo "Build Environment:"
echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

# Set memory limit
export NODE_OPTIONS='--max_old_space_size=4096'

# Install dependencies
npm install

# Verify configuration files
echo "PostCSS Configuration:"
cat postcss.config.js || echo "No PostCSS config found"

echo "Next.js Configuration:"
cat next.config.js

# Verify styles directory
echo "Styles directory:"
ls -la styles

# List pages for verification
echo "Available Pages:"
find pages -type f -name "*.js"

# Run build with error handling
npm run build || {
  echo "Build failed. Checking blog page:"
  cat pages/blog.js
  exit 1
}

# Verify build output
echo "Build Output:"
ls -la .next/server/pages
