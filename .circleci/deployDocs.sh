#!/bin/bash
git config user.name "$(git log master -1 --pretty=%an)"
git config user.email "$(git log master -1 --pretty=%ae)"

git checkout master
git pull origin master
git checkout gh-pages

# Run commands inside webside directory
cd website
npm run build
mkdir ../_site
mv build/clamp-orchestrator/* ../_site

# Run commands inside root directory
cd ..
find . -maxdepth 1 ! -name '_site' ! -name '.git' ! -name '.gitignore' ! -name '.circleci' -exec git rm -rf {} \;
mv ./_site/* .
rm -R _site/

git add -fA
git commit --allow-empty -m "$(git log master -1 --pretty=%B)"
git push -f origin gh-pages

echo "documentation updated successfully"