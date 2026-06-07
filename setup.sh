#!/bin/bash
# Run this from inside /Users/sahilkareer/Desktop/serp-pulse-marketing
# chmod +x setup.sh && ./setup.sh

PROJECT_DIR="$(pwd)"
echo "Setting up SERP-Pulse Marketing Site in: $PROJECT_DIR"

# Create directories
mkdir -p sanity/schemaTypes/blocks
mkdir -p sanity/lib
mkdir -p components/blocks
mkdir -p "app/studio/[[...tool]]"

echo "✓ Directories created"
echo ""
echo "Now paste each file as instructed..."
echo "Setup script complete - see file list above"
