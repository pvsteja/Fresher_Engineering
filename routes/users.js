const { response } = require('express');
const express = require('express');
var router = express.Router();
var db = require("../models/winners");
var obj = require("../routes/data.json");



router.get("/findByName", async (req, res) => {
  try {
    console.log(req.query.name)
    const users = await db.find({ firstname: { $regex: req.query.name, $options:'i'  } });
    res.send(users);
  } catch (err) {
    res.send("Error   " + err);
  }
});

router.get("/findByYear", async (req, res) => {
  try {
    console.log(req.query.year)
    const users = await db.find({ year: { $regex: req.query.year } });
    res.send(users);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.get("/findByYearAndCat", async (req, res) => {
  try {
    console.log(req.query.year)
    console.log(req.query.category)
    const users = await db.find({ year: { $regex: req.query.year }, category: { $regex: req.query.category }});
    res.send(users);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.get("/getSortList", async (req, res) => {
  try {
    const users = await db.find().sort({'firstname': 1});
    res.send(users);
  } catch (err) {
    res.send("Error" + err);
  }
});

module.exports = router;
