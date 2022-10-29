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

const { stringify } = require("querystring");
const { info } = require("console");

// Set static folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD
    }
  })

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_GMAIL,
    subject: `Message from ${req.body.name} via your website`,
    text: `Name: ${req.body.name} | Email: ${req.body.email} | Message: ${req.body.message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));