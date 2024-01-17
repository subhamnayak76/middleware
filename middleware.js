const express = require('express')
const app = express()

app.get('/',(req,res) => {
 const kidneyID = req.query.kidneyId;
 const username = req.headers.username;
 const password = req.headers.password;

 if(username != "subham" && password != "pass"){
    res.status(403).json({
        msg : "user doesnt exist"
    });
    return;
 }

 if( kidneyID != 1 && kidneyID != 2){
    res.status(411).json({
        msg:"wrong input"
    });
    return;
 }
 res.send("your heart is healthy")

})
app.listen(3000);