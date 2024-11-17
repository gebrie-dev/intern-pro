const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ dream: "Build a successful platform" });
});

module.exports = router;
