const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.Mongo_URL, {
    useNewUrlParser: true, 

    useUnifiedTopology: true 

  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen("5000", () => {
    console.log("Backend is running.");

});