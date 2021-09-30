const { response } = require('express');
const express = require('express');
var router = express.Router();
var db = require("../models/winners");
var obj = require("../routes/data.json");

for (let i = 0; i < obj["prizes"].length; i++) {
  
  let year = obj["prizes"][i]["year"];
  let category = obj["prizes"][i]["category"];

  for (let j = 0; j < obj["prizes"][i]["laureates"].length; j++) {
    let id = obj["prizes"][i]["laureates"][j]["id"];
    let firstname = obj["prizes"][i]["laureates"][j]["firstname"];
    let surname = obj["prizes"][i]["laureates"][j]["surname"];
    let motivation = obj["prizes"][i]["laureates"][j]["motivation"];
    let share = obj["prizes"][i]["laureates"][j]["share"];
    console

    
  }
}
// router.post('/addData', async function(req, res, next) {
  // console.log("entered");
  // const data = new db({
  //   year:req.body.question,
  //   category:req.body.answer
  // });
  // console.log(req.body)
  // try {
  //   console.log("try")
  //   const a1 = await data.save();
  //   res.status(200).send(a1);
  // } catch (err) {
  //   console.log("catch")
  //   res.status(404).send('Sorry, cant find that');
  // }
 

// });

module.exports = router;
