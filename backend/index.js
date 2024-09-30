// Importing the express module, which is used to create the server
const express = require("express");

// Loading environment variables from the .env file (like PORT, database connection strings)
require("dotenv").config();

// This line is importing the database connection configuration file
require("./Models/db");

// Importing the router that handles authentication routes (e.g., signup, login)
const AuthRouter = require("./Routes/AuthRouter");

// Importing body-parser middleware, which is used to parse incoming JSON request bodies
const bodyParser = require("body-parser");

// Importing the cors module to enable Cross-Origin Resource Sharing (used when the API is accessed from a different domain)
const cors = require("cors");

// Creating an instance of an Express app
const app = express();

// Defining the port number. If a PORT is defined in the .env file, it uses that; otherwise, it defaults to 8080
const PORT = process.env.PORT || 8080;

// Creating a basic root route ("/"). When someone accesses this endpoint, it sends "hello kaka" as a response.
app.get("/", (req, res) => {
  res.send("hello kaka");
});

// Middleware that parses the incoming JSON request body so it can be used in the route handlers
app.use(bodyParser.json());

// Enabling CORS to allow requests from different domains (useful for frontend-backend communication)
app.use(cors());

// Defining the base route for authentication. All routes in AuthRouter will be available under "/auth"
app.use("/auth", AuthRouter);

// Starting the server and making it listen on the specified PORT. Once the server starts, it will log the port it's running on
app.listen(PORT, () => {
  console.log("server is running on ", PORT);
});
