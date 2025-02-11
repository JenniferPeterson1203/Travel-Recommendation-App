const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Add this to load environment variables

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.json()); //PARSE JSON request bodies

app.get(`/api/hello`, (req, res) => {
  res.json({ message: "Hello there Jennifer, from the backend" });
});

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
