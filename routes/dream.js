const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    "My dream is to become a skilled MERN stack developer, establish myself as a successful freelancer, and eventually build a thriving software company that creates impactful solutions for global challenges."
  );
});

module.exports = router;
