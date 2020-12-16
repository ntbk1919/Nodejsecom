const express=require('express')
const path=require('path')

const app=express()


app.use(express.urlencoded({
  extended: true
}))



app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'signup.html'))
    console.log('mid')
    
})
app.use(function(req,res,next){
    console.log('End')
    next()
})
app.post('/signup',(req,res,next)=>{
    console.log(req.body)
    res.send('Signup done')
    next()
    
})
app.get('/about',(req,res)=>res.send('About'))

app.listen(3000,()=>{
    console.log(__dirname)
    console.log("Server Started")}
    
    )