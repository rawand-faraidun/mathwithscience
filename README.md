# Math with Science
Math with Science is an open-source MERN project that contains math and science problem solvers and the goal is to help anyone struggling with any math problems.	

<br />

![Math with Science brand logo](https://raw.githubusercontent.com/rawand-faraidun/mathwithscience/main/client/public/images/Logo-long.jpg)

## installation

Getting a local copy of the project.
```git
git clone https://github.com/rawand-faraidun/mathwithscience.git
```

## Usage

**Note**: before running the project, pay attention to these points:

* Watch `.env.example` file in and make a `.env` file based on it.

* Run `pre-build` script, or read `README.md` file in [`server`](https://github.com/rawand-faraidun/mathwithscience/tree/main/server#readme) and [`client`](https://github.com/rawand-faraidun/mathwithscience/tree/main/client#readme) folders to know more about the project's function.

### The project can be run these ways:

1. Use server to serve the static front-end *(this is how the website works)*, this can be done using `start` script.
```npm
npm start
```

2. Use React development and server seperatly using `dev` script, by default the server runs on port **5000** and react development runs on port **3000**.
```npm
npm run dev
```

3. Use `server` script to run the server, `client` script to run the client, or cd into them and start them there.

run server:
```npm
npm run server
```

run client:
```npm
npm run client
```
