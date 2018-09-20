var express = require("express");
var multer  = require("multer");
var ejs     = require("ejs");
var path    = require("path");
 
var app = express();

app.set("view engine","ejs");

app.get("/api/file",(req,res)=>{
    res.render('index1');
});

var storage =  multer.diskStorage({
    destination:'uploads/'
    }
); 

app.post("/api/file",(req,res)=>{
    var upload = multer({
        
        storage: storage
    }).single('userFile');
    upload(req,res,function(err){
        res.end('file is uploaded');
    });
});



app.listen(4000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("app running on port 3000");
    }

});