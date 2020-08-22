const express = require("express");
const router = express.Router();

const homeRoute = (req, res) => {
  res.sendFile("/index.html");
};

router.get("/", homeRoute);
module.exports = router;