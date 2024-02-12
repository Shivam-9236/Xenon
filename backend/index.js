const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const contactRoutes = require("./routes/ContactRoutes");
const bodyParser = require("body-parser");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", userRoutes);
app.use("/", contactRoutes);

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.get("/", (req, res) => {
  res.send("Heloo");
});

app.listen(port, () => {
  console.log(`App is running on the port ${port}`);
});
