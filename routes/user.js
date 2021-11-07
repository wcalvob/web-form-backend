const express = require("express");
const { addUser, getUser } = require("../controllers/userController");
const api = express.Router();

api.post("/users", addUser);
api.get("/users", getUser);

module.exports = api;
