// basically the flow is prepared here 

const express =require("express")
const app =express()
require("dotenv").config();

const port=process.env.PORT|| 3000
app.use(express.json())

// import routes for to do api 
const todoroutes=require("./routes/todo")
app.use ("/api/v1",todoroutes)

app.listen(3000,()=>{
    console.log(`app is running successfully at ${port}`)
})
const dbConnect= require("./config/databse")
dbConnect();

app.get("/",(req,res)=>{
    res.send("this is homepage")
})