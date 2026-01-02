const express = require("express");
require("dotenv").config();
const UserRoute = require("./routes/UserRoutes.js");

//constants
const PORT = process.env.PORT || 8000;

//server
const app = express();

//Middleware
app.use(express.json());
app.use("/user", UserRoute);


// listening
app.listen(PORT, (req, res) => {
    console.log("Server is Running on : ", PORT);
});