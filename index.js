//ITCS227 Source Code Template for 3T AY 2022-2023
/*
Progam:  E-commerce API
Programmer: Miguel Cervantes, Summie Diserto
Section: AN22
Start Date: July 16, 2023
End Date: July 17, 2023
*/

const express = require("express");
const mongoose = require("mongoose")
const loginRoute = require("./routes/loginRoute")
const prodRoute = require("./routes/prodRoute")
const userRoute = require("./routes/userRoute")
const app = express();
const port = 4000


app.use(express.json())
mongoose.connect(
    "mongodb+srv://summie:mongodb1234@cluster0.3afkyfc.mongodb.net/an22_sample_database?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

app.use("/login",loginRoute)
app.use("/products",prodRoute)
app.use("/users",userRoute)

app.get("/",async(req,res)=>{
  res.send("Hello")
})

mongoose.connection.once('open',()=>console.log("Now Connected to MongoDb Atlas"))
app.listen(port,()=>{
    console.log("App is running at port " + port)
})