!#/bin/bash
git config user.name "$(git log master -1 --pretty=%an)"
git config user.email "$(git log master -1 --pretty=%ae)"

git checkout master
git pull origin master

cd website
npm run build
mv docs/* ./_site
rm -R docs/

git add -fA
git commit --allow-empty -m "$(git log master -1 --pretty=%B)"
git push -f origin master

echo "documentation updated successfully"