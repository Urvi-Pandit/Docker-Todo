A very basic todo app. This app is built using MERN stack. The frontend and backend have been put into separate containers. 
One needs to create images individually for both the containers, and finally build one image for both.
The application works by finally running docker-compose up.
docker build -t react-app .
This command builds frontend image and should be run in client folder, while docker build -t node-app . this command build backend image and should be run in server folder
docker-compose build builds an image for the entire appliaction, which then can be run with docker-compose up
