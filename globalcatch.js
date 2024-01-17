const express = require('express')
const app = express()

app.use(express.json())
app.get('/',(req,res) =>{
    const kidney = req.body.kidneyid
    
})

// if any of the routes give exceptension then this middleware will comein actio

//global catches
app.use((err,req,res,next)=>{
   res.status(404).json({
    msg : "bro there is problem in your end"
   })
})

