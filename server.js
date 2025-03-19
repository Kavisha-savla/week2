var express = require("express")
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;

app.get("/addTwoNumber",(req,res)=>{
    const m1= parseInt(req.query.m1);
    const m2= parseInt(req.query.m2);

    const addTwoNumber=(m1,m2)=>{
    return m1+m2;
}
});
app.listen(port,()=>{
console.log("App listening to: ${port}")
})

