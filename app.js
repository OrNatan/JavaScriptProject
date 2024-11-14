const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

// mongoose.connect(process.env.DB_URL,{useNewUrlParser : true})
// const db = mongoose.connection
// db.on("error",(err)=>{
// console.log(err)
// })

// db.once("open",()=>{
//     console.log("connected to the DB")
// })

const port = process.env.PORT
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.listen(port,()=>{
    console.log(`The app is running at localhost${port}`)
})