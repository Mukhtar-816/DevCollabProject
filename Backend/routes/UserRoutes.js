const express = require("express");

const Route = express.Router();

Route.get("/get",(req, res) => {
    console.log("Working");
});


module.exports = Route;