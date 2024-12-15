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

# Run build
npm run build || {
  echo "Build failed. Checking page components:"
  cat pages/blog.js
  cat pages/projects.js
  cat pages/about-us.js
  exit 1
}

# Verify build output
echo "Build Output:"
ls -la .next/server/pages
