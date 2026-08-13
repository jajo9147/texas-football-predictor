#!/usr/bin/env bash
set -e

echo "🤘 Deploying Texas Longhorns AI Season Predictor to GitHub Pages..."

if ! command -v git &> /dev/null; then
  echo "Error: git is not installed."
  exit 1
fi

if [ ! -d ".git" ]; then
  git init
  git branch -M main
fi

git add .
git commit -m "Texas Longhorns AI Season Predictor - Ready for GitHub Pages" || true

if command -v gh &> /dev/null; then
  echo "Using GitHub CLI to create or push repository..."
  gh repo create texas-football-predictor --public --source=. --push || git push -u origin main
  echo "Done! Go to repository settings to enable GitHub Pages if not already set."
else
  echo "Repo initialized and committed locally. Add your remote with:"
  echo "  git remote add origin https://github.com/<your-username>/texas-football-predictor.git"
  echo "  git push -u origin main"
fi
