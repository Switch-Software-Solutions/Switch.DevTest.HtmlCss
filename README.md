# Meteor App

This is a test for your front end skills. 

It consists of a meteor app, which shows a big table of meteors information with the option to open a sidebar. Said sidebar offers the option to edit that meteor's data and view comments associated with it.

## Deliverable

The objective is to deliver a faithful implementation of provided design and prototype, with strong focus on Sass
- The solution should be delivered as a pull request on the provided repository
- There are no restrictions on adding, deleting or modifying files
- Javascript is NOT required. Functionality such as perform actions on button clicking should NOT be implemented

### Repository
1. Node is required to run the solution. If it's not installed in your local environment, please download and install [Node LTS](https://nodejs.org/en/) (or you can use [NVM](https://github.com/nvm-sh/nvm) or [NVM for Windows](https://github.com/coreybutler/nvm-windows), depending on you OS)
2. Fork the repository (if you're having troubles forking: [GitHub Docs - Fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo))
3. Clone your new repository (if you're having troubles cloning: [GitHub Docs - Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository))
4. Go to root folder (../Switch.DevTest.HtmlCss) where you will find all files related to the project
5. Open a terminal (on that folder) and run `npm start` to start the project (each time you save a scss file, a process will convert that to css and override it inside the css folder. That means that you should wait a couple of seconds before you can see your changes reflected on the screen)
6. Open the index.html file with a browser
7. Once you made and pushed all required changes you can ask for a pull request from your repository to the original to submit your test. (if you're having troubles creating the PR: [GitHub Docs - Creating a pull request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork))

Notes:
- There is no restriction on the amount of commits, you can make (and push) as many as you want
- Once you run the app, some css files might be generated, you should **NOT** change those files. Only scss files should be edited
- If a new scss file is created, package.json should be updated to reflect such change
	- Example: This should be the default value for build-css inside your package.json
	```
	"build-css": "node-sass --include-path scss scss/styles.scss css/styles.css"
	```
	- If I add myStyle.scss to scss folder, that file should be added to build-css as follows
	```
	"build-css": "node-sass --include-path scss scss/styles.scss css/styles.css && node-sass --include-path scss scss/myStyle.scss css/myStyle.css"
	```


## Design

### Prototype
- [Figma Prototype](https://www.figma.com/proto/aDABvG54KWPH8kq3ZRmYEw/Meteor-App?page-id=0%3A1&node-id=1%3A1720&viewport=-2286%2C-637%2C1.74&scaling=min-zoom&starting-point-node-id=1%3A1720)
- You should use provided prototype below to see the entire flow
- While looking at the prototype
	- Click on the screen to highlight the interactions
	- Hover and click on the icons and buttons to find all interactions

### Zeplin
- [Zeplin Design](https://zpl.io/Q0pykym)
- All colors and layout measures are defined in Zeplin
- You can click on any elements to see it's details on the right


## Requirements

### General
- Screen should not be less than 1200px regardless window's size
- While scrolling vertically, app header and sidebar should remain visible

### Table 
- Scroll should be visible if needed, horizontally and vertically
- Activity Period column should not scroll horizontally with the rest of the columns, it should be always visible at the end of the table
- When a row is clicked it should change colors to reflect that it's selected

### Sidebar
- The sidebar should slide in from the left
- All action icons at the top should have a hover state and tooltip
- The Activity Period field should have an info icon which shows more information when pressed
- On the comments tab, only texts and inputs should be displayed (**DO NOT IMPLEMENT COMMENTS'S FUNCTIONALITY**)
- When explode button is pressed, it should change colors and the fire icon
