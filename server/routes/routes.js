const router = require("express").Router();

router.get("/post",(req,res)=>{
    res.send({
        Response : "hello"
    })
});

router.post("/post",(req,res)=> {
    var body = req.body;
    if(body._id) {
        res.send({Response : "Posted _id"});
    }else {
        res.send({Error : "_id is not present"});
    }
});

router.patch("/post",(req,res)=>{
    var body = req.body;
    if(body._id) {
        res.send({Reponse : "Updated _id"});
    }else {
        res.send({Error : "_id should be present in body to update"});
    }
});
module.exports = router;