const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(`mongodb://${process.env.DB_URL}:27017/nodemongo`, {
  useNewUrlParser: true
});

app.get("/", (req, res) => {
  return res.send("Hello World 4");
});
app.listen(3000);
