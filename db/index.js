const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("express").Router();
const dotEnv = require("dotenv");

dotEnv.config();

mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{console.log("Connected to DB")}).catch((err)=>{console.log(err)});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use("/",require("./routes/post"));

app.get("/",(req,res)=>{
    res.send("Server is up and running")
});
app.listen(process.env.PORT,()=>{console.log("Connected to server")});