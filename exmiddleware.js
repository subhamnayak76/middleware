const express = require('express')
const app = express()
function usermiddleware(req,res,next){
    const username = req.headers.username
    const password = req.headers.password
    if(username !== "subham" && password !== "pass"){
        res.status(404).json({
            msg:"wrong credintals"
        });
    }
        else{
            next();
        }
    }

function kidneymiddleware(req,res,next){
    const kidneyID = req.query.kidneyId;
    if(kidneyID != "1" && kidneyID != "2"){
        res.status(404).json({
            msg : "wrong inputs"
        })
        return
    }
    else
    {
        next()
    }
}    



app.get('/health-check',usermiddleware,kidneymiddleware,(req,res) =>{
    res.send('your are healthy')
})
app.listen(3000)