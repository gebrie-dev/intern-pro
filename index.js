const express = require("express");
const app = express();
const port = process.env.PORT || 3100;


app.get("/name", (req, res) => {
  res.send("Gebre Wagnew Mamay");
});

app.get("/hobby", (req, res) => {
  res.json({
    hobby:
      "My hobby is playing football and imagining myself as part of FC Barcelona",
  });
});

app.get("/dream", (req, res) => {
  res.send(
    "My dream is to become a skilled MERN stack developer and build a thriving software company."
  );
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
