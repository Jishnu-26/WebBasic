const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const data = [{ 
    classname: "Like a butterfly", 
    type: "Boxing", 
    hours:"9.00AM-11.00AM", 
    trainer:"Aaron Chapman", 
    spots:"10" 
},
{ 
    classname: "Like a butterfly", 
    type: "Boxing", 
    hours:"9.00AM-11.00AM", 
    trainer:"Aaron Chapman", 
    spots:"10" 
},
{ 
    classname: "Like a butterfly", 
    type: "Boxing", 
    hours:"9.00AM-11.00AM", 
    trainer:"Aaron Chapman", 
    spots:"10" 
},
{ 
    classname: "Like a butterfly", 
    type: "Boxing", 
    hours:"9.00AM-11.00AM", 
    trainer:"Aaron Chapman", 
    spots:"10" 
},
{ 
    classname: "Like a butterfly", 
    type: "Boxing", 
    hours:"9.00AM-11.00AM", 
    trainer:"Aaron Chapman", 
    spots:"10" 
},
{ 
    classname: "Like a butterfly", 
    type: "Boxing", 
    hours:"9.00AM-11.00AM", 
    trainer:"Aaron Chapman", 
    spots:"10" 
},
{ 
    classname: "Like a butterfly", 
    type: "Boxing", 
    hours:"9.00AM-11.00AM", 
    trainer:"Aaron Chapman", 
    spots:"10" 
},
{ 
    classname: "Like a butterfly", 
    type: "Boxing", 
    hours:"9.00AM-11.00AM", 
    trainer:"Aaron Chapman", 
    spots:"10" 
},
{ 
    classname: "Like a butterfly", 
    type: "Boxing", 
    hours:"9.00AM-11.00AM", 
    trainer:"Aaron Chapman", 
    spots:"10" 
},
{ 
    classname: "Like a butterfly", 
    type: "Boxing", 
    hours:"9.00AM-11.00AM", 
    trainer:"Aaron Chapman", 
    spots:"10" 
}];



const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req, res){
    res.render("index",{data: data});
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});