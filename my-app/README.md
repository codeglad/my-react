Deploying a react-app (build and publish to github page):
=========================================================
Use the latest version of npm and run the following commands in the app folder:

1. Run 'npm install' - This will create 'node_modules' folder
2. Run 'npm run build' - This will create 'build' folder
3. Add the following new field to package.json:
"homepage": "https://<github-username>.github.io/<project-repo>"
4. Repeat #2
5. Run 'npm install --save-dev gh-pages'
6. Add a new script to the scripts field inside package.json.
"deploy" : "npm run build&&gh-pages -d build"
7. Run 'npm run deploy'
8. Head to your project?s repository settings on GitHub. In the GitHub Pages section, confirm that your project is set to use the gh-pages branch.

Ref: https://medium.freecodecamp.com/surge-vs-github-pages-deploying-a-create-react-app-project-c0ecbf317089
