const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(userRoutes);

module.exports = app;
