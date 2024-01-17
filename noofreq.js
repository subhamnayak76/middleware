const express = require('express')
const app = express()

let noofreq = 0
function nofreq(req,res,next){
    noofreq++
    console.log(noofreq)
    next()
    }



app.get('/',nofreq,(req,res) =>{
  res.send("thank you for visiting")  
})

app.listen(3000)