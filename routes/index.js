var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const values=["Noel","Rahul","Abhi","Faiz"]
  const person={name:"Nikhil",comments:{comment:"sample comment",date:"01-08-2090"}}
  res.render('index', {person});
});

module.exports = router;
