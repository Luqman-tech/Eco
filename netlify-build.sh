#!/bin/bash

# Enable verbose output and exit on first error
set -ex

# Ensure npm and node are installed
npm install -g npm@latest

# Clear npm cache
npm cache clean --force

# Install project dependencies
npm ci

# Build the project
npm run build

# Optional: Verify build output
ls -la .next