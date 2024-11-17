const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ hobby: "Programming" });
});

module.exports = router;
