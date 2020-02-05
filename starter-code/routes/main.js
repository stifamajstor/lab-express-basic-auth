const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.get("/main", (req, res, next) => {
  // display a form
  res.render("page.hbs");
});

module.exports = router;
