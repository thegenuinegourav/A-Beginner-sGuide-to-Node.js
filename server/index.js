const app = require("express")();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.listen(3000,()=>{console.log("Connected to server")});
app.get("/",(req,res) => {
    res.send("Server is up and running");
});

const routes = require("./routes/routes");
app.use("/",routes);

