var http = require("http");
var fs=require('fs')
http.createServer(function (req, res) {
  if (req.url=='/')
      {
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
}
else if(req.url=='/signup')
  {
   
    fs.readFile('signup.html',(err,data)=>{ res.writeHead(200,{'Content-Type':'text/html'})
    res.write(data)
    res.end()
    })

    
}
else
{ res.writeHead(404,{'Content-Type':'text/html'})
  res.write('error')
  res.end()
}
}).listen(7000,function(){
  console.log("Listening on 7000")
});

