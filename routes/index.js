var express = require('express');
var router = express.Router();
var MongoClient=require('mongodb').MongoClient
/* GET home page. */
router.get('/', function(req, res, next) {
  const values=["Noel","Rahul","Abhi","Faiz"]
  const person={name:"Nikhil",comments:{comment:"sample comment",date:"01-08-2090"}}
  res.render('index', {person});
});
router.post('/submit',function(req,res){
  console.log(req.body)
  MongoClient.connect("mongodb://localhost:27017",(err,client)=>
  {if(err)
  console.log(err)
  else
  client.db('Signup').collection('user').insertOne(req.body)
  })

  res.send('Gotit')
})
module.exports = router;
