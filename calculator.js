//fishlint esversion:6
// const {request,response} =reqiure ("express");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();


app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);

    var result= num1 + num2;

    res.send("the results of the calculation is " +result);

});



app.get("/bmi_calculator",function(req,res){
    res.sendFile(__dirname + "/bmi_calculator.html");
});

app.post("/bmi_calculator", function(req,res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);

    var bmi=weight/(height*height);

    res.send("Your BMI is "+bmi);
});

app.listen(3000,function(){
    console.log("server started on port 3000");
});