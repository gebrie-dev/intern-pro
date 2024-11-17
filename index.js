const express = require("express");
const app = express();
const port = process.env.PORT || 3100;

// Route 1: /name
app.get("/name", (req, res) => {
  res.send("Gebre Wagnew Mamay");
});

// Route 2: /hobby
app.get("/hobby", (req, res) => {
  res.json({
    hobby:
      "My hobby is playing football and imagining myself as part of FC Barcelona",
  });
});

// Route 3: /dream
app.get("/dream", (req, res) => {
  res.send(
    "My dream is to become a skilled MERN stack developer and build a thriving software company."
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
