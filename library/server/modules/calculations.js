var express = require("express");
var router = express.Router();

//object to hold the values
var valuesObj = {};

router.post('/', function(req, res){ //the math
  valuesObj = req.body;
  if (valuesObj.opperator == "addtion") {
    valuesObj.total = Number(valuesObj.firstNumber) + Number(valuesObj.secondNumber);
  }else if (valuesObj.opperator == "subtraction") {
    valuesObj.total = Number(valuesObj.firstNumber) - Number(valuesObj.secondNumber);
  }else if (valuesObj.opperator == "multiplication") {
    valuesObj.total = Number(valuesObj.firstNumber) * Number(valuesObj.secondNumber);
  }else if (valuesObj.opperator == "division") {
    valuesObj.total = Number(valuesObj.firstNumber) / Number(valuesObj.secondNumber);
  }
  console.log(valuesObj);
  res.sendStatus(201)
})

router.get('/', function(req, res) {

  res.send(valuesObj);
});

module.exports = router;
