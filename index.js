const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
dotEnv.config();
const app = express();
const PORT = process.env.PORT;

//use middleware
app.use(cors());
app.use(express.json());

//listen port
app.listen(PORT, () => console.log("server is running.."));
