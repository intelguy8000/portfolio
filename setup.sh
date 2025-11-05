#!/bin/bash

# Portfolio Setup Script for Juan Andrés García
# This script helps you quickly set up the portfolio project

echo "🚀 Setting up Juan Andrés García Portfolio..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed  
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create environment file
if [ ! -f .env ]; then
    echo "📋 Creating .env file from template..."
    cp .env.example .env
    echo "⚠️  Please update .env with your actual keys"
fi

# Create necessary directories
echo "📁 Creating directory structure..."
mkdir -p public/images/projects
mkdir -p public/images/testimonials  
mkdir -p public/resume
mkdir -p src/app
mkdir -p src/components
mkdir -p src/utils
mkdir -p src/hooks
mkdir -p src/types

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env with your EmailJS and GA credentials"
echo "2. Add your resume PDF to public/resume/"
echo "3. Add project screenshots to public/images/projects/"
echo "4. Run 'npm run dev' to start development"
echo ""
echo "Happy coding! 🎉"
