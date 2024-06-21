# Project Title

Dashmote interview round1 dashboard

## Getting Started

### Dependencies

npm

### Installing & Executing program

To install & run, we use docker. After cloning the repo,
run `docker build -t DashmoteDemo:1 .`
then run `docker run -d -p 80:5173 dashmotedemo:1`
then view the website on localhost

### What I finished and left

Finished:

- User can view project with details in app
- User can delete projects from the dashboard, there is a confirmation step as well

Not done:

- View projects on a mobile device
- category-level visual for each project: I assume this is about the different color for the project detials? I currently have color of colorbar, avatar fixed
- Search project by name: My design is to pass a search term as query param to backend api
