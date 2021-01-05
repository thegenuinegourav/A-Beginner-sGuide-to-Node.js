const router = require("express").Router();
const Post = require("../model/post");
router.post("/post", async(req,res)=>{
    const title = req.body.title;
    const des = req.body.description;
    const newPost = new Post({
        title: title,
        description: des
    });
    const savedPost = await newPost.save();
    res.json(savedPost);
});

router.get("/post",async(req,res) => {
    const posts = await Post.find({});
    res.json(posts);
});

router.get("/post/:postid",async(req,res) => {
    const _id = req.params.postid;
    const post = await Post.findById(_id);
    res.json(post);
})

router.patch("/post/:postid",async(req,res) => {
    const _id = req.params.postid;
    const updatedPost = await Post.findByIdAndUpdate(_id, { $set: {description: req.body.description} });
    res.json({Status: "updated successfully!"});
});

router.delete("/post/:postid",async(req,res) => {
    const _id = req.params.postid;
    await Post.findByIdAndDelete(_id);
    res.json({Status: "Deleted Successfully!"});
})

module.exports = router;