const express = require("express");
const router = express.Router();
// const User = require("../models/User");

router.post("/foodData", async (req, res) => {
  try {
    res.send([global.fooditems, global.foodcatogry]);
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});

module.exports = router;
