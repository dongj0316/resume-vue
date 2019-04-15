#!/usr/bin/env sh
# https://cli.vuejs.org/zh/guide/deployment.html#github-pages
# stop when error
set -e

# build
npm run build

# cd build dir
cd dist

git init
git add -A
git commit -m 'deploy'


# deploy
git push -f git@github.com:nusr/resume-vue.git master:gh-pages

cd -
