const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect("mongodb://localhost/devbook-db").then((_, err) => {
  if (err) throw new Error({ msg: err });
  console.log("Connected to MongoDB");
});

app.use("/test", require("./routes/test-routes"));

app.listen(PORT, () => console.log(`app listening on port: ${PORT}`));
