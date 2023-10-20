# Introduction 

Here is the code responsible for displaying [jake-kirkman.github.io](https://jake-kirkman.github.io), which is a React App that was built with the intention of having a place to put all my previous projects in one place for reviewers and those who are curious to have a look at. Plus, it's pretty fun to have essentially a playground where I can implement ~~useless~~ useful functionality like filters and searching, with the possibility of having interactive "projects" down the line too that can be displayed on the site.

# Branching Strategy

Three primary branches:
- Master (Live prod code)
- Develop (Latest developmental code)
- Build (Published site, and is what is displayed on jake-kirkman.github.io)

# Building and Deploying

Start by making changes in Develop, committing them and pushing to origin, then once you want to push changes to the live site, checkout master and merge develop into it, then run
```
npm install
npm run deploy
```
Which will take the code, and using `gh-pages` create a build of the react app and deploy it to the `Build` branch.