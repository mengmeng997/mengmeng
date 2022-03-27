const express = require('express');
const app = express()

app.use(express.static(__dirname + '/dist'));

app.get("/list",(req,res)=>{
    res.status(200).send([1,2,3,4]); 
})

app.listen(9000,_=>{
    console.log(`服务项目9000 已启动`)
})