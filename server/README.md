# [Math with Science](https://www.mathwithscience.com/) - Server
Server side (Back-end) of math with science website.

The server is made with [Express.js](https://expressjs.com/), it servers `index.html` file from client side build folder for every get routes, to try the server make sure the build folder is ready before starting it [(read more)](https://github.com/rawand-faraidun/mathwithscience/tree/main/client), or use the server and the client independently as they are connected through RestAPIs.  
Post routes and database models are defined in [APIs](https://github.com/rawand-faraidun/mathwithscience/tree/main/server/APIs) folder

## Getting started
run `pre-build` script to install the dependencies.
```npm
npm run pre-build
```

to start the server with development tools use `dev` script.
```npm
npm run dev
```

to start production server use `start` script.
```npm
npm start
```

**NOTE**: the server uses `.env` file from the root folder of the project, make a `.env` file based on [`.env.example`](https://github.com/rawand-faraidun/mathwithscience/blob/main/.env.example) 


## [APIs](https://github.com/rawand-faraidun/mathwithscience/tree/main/server/APIs) folder
It contains API routes and database models for [mongoose](https://mongoosejs.com/) and [MongoDB](https://www.mongodb.com/)