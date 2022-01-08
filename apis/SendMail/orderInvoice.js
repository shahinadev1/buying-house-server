const nodemailer = require("nodemailer");

const trans = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMIL_USER || "codershahin1@gmail.com",
    pass: process.env.EMIL_PASS || "Shahin99@",
  },
});

module.exports = trans;
