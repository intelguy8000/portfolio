#!/bin/bash

# Git Commands to Upload Portfolio to GitHub
# Repository: https://github.com/intelguy8000/portfolio

echo "📤 Uploading Portfolio to GitHub..."
echo "Repository: https://github.com/intelguy8000/portfolio"
echo ""

# Initialize git if not already initialized
if [ ! -d .git ]; then
    echo "Initializing Git repository..."
    git init
fi

# Add all files
echo "Adding all files..."
git add .

# Commit
echo "Creating commit..."
git commit -m "feat: Initial portfolio setup with Next.js, Tailwind, and content structure

- Added complete project structure
- Configured Next.js 14 with TypeScript support
- Set up Tailwind CSS with custom theme
- Added portfolio content data (experience, projects, skills)
- Included Graphite contractor experience
- Created setup scripts and documentation
- Added Claude Code instructions for implementation"

# Add remote (if not exists)
if ! git remote | grep -q "origin"; then
    echo "Adding GitHub remote..."
    git remote add origin https://github.com/intelguy8000/portfolio.git
fi

# Push to main branch
echo "Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Successfully uploaded to GitHub!"
echo ""
echo "Next steps:"
echo "1. Visit https://github.com/intelguy8000/portfolio"
echo "2. Open Claude Code and share the repo"
echo "3. Use CLAUDE_CODE_INSTRUCTIONS.md to guide implementation"
echo "4. Deploy to Vercel when ready"
