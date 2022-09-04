const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
const bodyparser = require("body-parser");
const fs = require("fs");

const app = express();

const mongoose = require("mongoose");
const { stringify } = require("querystring");

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));