#!/bin/bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=================================${NC}"
echo -e "${BLUE}  Playwright Lab - Setup Script${NC}"
echo -e "${BLUE}=================================${NC}\n"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed${NC}"
    echo -e "${YELLOW}Please install Node.js from https://nodejs.org/${NC}"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed${NC}"
    echo -e "${YELLOW}Please install npm${NC}"
    exit 1
fi

NODE_VERSION=$(node -v)
NPM_VERSION=$(npm -v)

echo -e "${GREEN}✓ Node.js is installed${NC} ($NODE_VERSION)"
echo -e "${GREEN}✓ npm is installed${NC} ($NPM_VERSION)\n"

# Install dependencies
echo -e "${BLUE}📦 Installing project dependencies...${NC}"
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}\n"

# Install Playwright browsers
echo -e "${BLUE}🎭 Installing Playwright browsers...${NC}"
npx playwright install
echo -e "${GREEN}✓ Playwright browsers installed${NC}\n"

echo -e "${GREEN}=================================${NC}"
echo -e "${GREEN}  ✓ Setup completed successfully!${NC}"
echo -e "${GREEN}=================================${NC}\n"

echo -e "${BLUE}Next steps:${NC}"
echo -e "  • Run tests in UI mode: ${YELLOW}npm run ui:devui${NC}"
echo -e "  • Run smoke tests: ${YELLOW}npm run test:dev:smoke${NC}"
echo -e "  • Run all tests: ${YELLOW}npm run test:dev:full${NC}"
echo -e "  • Check code quality: ${YELLOW}npm run check:all${NC}"
echo -e "\nFor more information, check the ${YELLOW}README.md${NC}\n"
