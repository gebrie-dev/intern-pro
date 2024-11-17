const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ dream: "Be expert in MERN satck andBuild a successful platform" });
});

module.exports = router;
