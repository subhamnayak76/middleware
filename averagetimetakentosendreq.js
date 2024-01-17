const express = require('express')
const app = express()
app.use(express.json())

function send(req,req,next){
    const username = req.body.username
    const pass  =req.body.password
    const date = new Date()
    const start = date.getSeconds();

    next()

}

function response(req,res,next){
    res.json({
        msg :"hello there"
    })
    next()
}


app.get('/',send,response,(req,res) =>{
    res.send("welcome welcome")
})

app.listen(3000)