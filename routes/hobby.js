const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hobby:
      "My hobby is staying active by playing football and imagining myself as part of FC Barcelona.",
  });
});

module.exports = router;
