#!/bin/bash

# Remove merge conflict markers
sed -i '/^<<<<<<< HEAD/d' package.json
sed -i '/^=======$/d' package.json
sed -i '/^>>>>>>> /d' package.json

# Validate JSON
npm run lint