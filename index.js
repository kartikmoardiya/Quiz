const express = require('express')
const app = express();
const db = require('./Database/db')
const bodyParser = require('body-parser'); 
const que_route = require('./Routes/queRoute')
const PORT = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use("/que",que_route);
app.get("/",(req,res)=>{
    res.json({msg:"Hello"})``
})
app.listen(PORT,()=>{
    console.log("Listening on Port...")
})