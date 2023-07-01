const express= require("express");

const bd=require("body-parser");


const app=express();

app.use(bd.urlencoded({extended:true}));

app.get("/",(req,res)=>{

    res.sendFile(__dirname+ "/login.html");
});

app.post("/", (req,res)=>{

    var useranem=req.body.name;
    var pass=req.body.pass;

    if(useranem=="nilesh" && pass=="1212"){

        res.send("Login Sucssesfully");
    }
    else{

        

        res.send("<h1>"+useranem + "is username not exist, Sorry Sir Try Again!!! </h1>");
    }
});


app.listen(80,()=>{

    console.log("Ok run succ");
})