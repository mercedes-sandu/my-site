const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
const bodyparser = require("body-parser");
const fs = require("fs");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express();

app.use(connectLiveReload());

const mongoose = require("mongoose");
const { stringify } = require("querystring");

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));