const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Gebre Wagnew Mamay");
});

module.exports = router;
