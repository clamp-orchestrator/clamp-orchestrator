#!/bin/bash
git config user.name "$(git log master -1 --pretty=%an)"
git config user.email "$(git log master -1 --pretty=%ae)"

git checkout master
git pull origin master

# Run commands inside webside directory
cd website
npm run build
mkdir ../_site
mv build/clamp-orchestrator/* ../_site

# Run commands inside root directory
cd ..
git checkout gh-pages
find . -maxdepth 1 ! -name '_site' ! -name '.git' ! -name '.gitignore' ! -name '.circleci' -exec rm -rf {} \;
ls  -al
mv ./_site/* .
rm -R _site/

# Update gh-pages
git add -fA
git commit --allow-empty -m "$(git log master -1 --pretty=%B)"
git push -q https://${DOCS_GITHUB_TOKEN}@github.com/clamp-orchestrator/clamp-orchestrator.git gh-pages

echo "documentation updated successfully"