const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Lap Trinh Mang");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


# hello from dev branch
# WTF sao ko đc