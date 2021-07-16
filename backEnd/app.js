const express = require("express");
const App = express();
require("dotenv").config();
const mongoose = require("mongoose");
const port = 8000;
const authRoute = require('./routes/Auth')

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("db Connected"))
  .catch(err => console.log(err))

App.use(express.json())
App.use('/api',authRoute)

App.get("/", (req, res) => {
  res.send("test");
});

App.listen(port, () => {
  console.log("server running");
});
