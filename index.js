const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const router = require("./apis/api");
dotEnv.config();
const app = express();
const PORT = process.env.PORT || 8080;

//use middleware
app.use(cors());
app.use(express.json());

//router use
app.use(router);

//root route
app.get("/", (req, res) => {
  res.send("server is running..");
});

//database
(async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
  } catch (error) {
    console.log("DB connect Error: ", error);
  }
})();

//listen port
app.listen(PORT, () => console.log("server is running.."));
