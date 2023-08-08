This task management web app is developed using React for both the front end and back end, creating a cohesive and user-friendly experience. The application allows users to organize, track, and manage their tasks efficiently. One of the standout features includes a search function, enabling users to quickly search through their tasks to find specific items. Additionally, a counter is incorporated to keep track of how many tasks have been completed, offering an at-a-glance view of progress. Whether for personal use or team collaboration, this app is designed to enhance productivity and keep tasks organized and accessible.

Preview:

![Screenshot 2023-08-08 at 8 28 58 PM](https://github.com/mmc03-ucb/Task-Manager/assets/70145981/2c55c8a7-bbc0-4b4d-adca-14316942ed48)

# mern-tailwind-vivid-starter
A starter repository with React, Tailwind, Vivid, and Express set up

# Getting Started
This repository contains both an Express backend (within api) and a React frontend (within client). To get started, clone the repository. Navigate to your terminal and execute the following command.

```bash
git clone https://github.com/vivid-labs/mern-tailwind-vivid-starter.git
```
In order to have a fully functional web app, you'll need to run both the frontend and the backend simultaneously. 
## Starting the frontend
From the root of the repository, you'll need to enter the client folder, install the necessary dependencies, and run the app. 
```bash
cd client
#If you don't already have yarn
npm install --global yarn
yarn install
yarn start
```
Navigate to localhost:3000 to see the running app. You'll notice that the Express status will state "Currently down." It will remain that way until you start the backend. 

## Starting the backend
From the root of the repository, you'll need to enter the api folder, install the necessary dependencies, and run the server. 
```bash
cd api
yarn install
yarn start
```
Navigate to localhost:9000/testAPI to see the results of the /testAPI route. If you refresh your localhost:3000 tab, your Express status should change. 

# Styling with Vivid
Vivid lets you style with Tailwind in your browser. <kbd>Cmd</kbd>-Click (Windows: <kbd>Ctrl</kbd>) on any component to see its code. Check out [Vivid's docs](https://docs.vivid.lol) for a guide to its full functionality. 
