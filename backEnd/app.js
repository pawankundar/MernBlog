const express = require("express");
const App = express();
require("dotenv").config();
const mongoose = require("mongoose");

const authRoute = require("./routes/Auth");
const userRoute = require("./routes/Users");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("db Connected"))
  .catch((err) => console.log(err));

App.use(express.json());
App.use("/api/auth", authRoute);
App.use("/api/users", userRoute);

App.listen(process.env.PORT_NO, () => {
  console.log("server running");
});
