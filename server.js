var http = require("http");
var fs=require('fs')
http.createServer(function (req, res) {
  fs.readFile('samplehtml.html',function(err,data){
    try{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(data)
    res.end()
  }
  catch(err){
    res.write("ERRor")
    res.end()
  }
  })
 
}).listen(7000);

