const express=require('express');
const bodyParser= require("body-parser")
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "Get,Post,Patch,Delete,options");
    next();
});

app.get("/api/post",(req,res,next)=>{
    const posts= req.body;
    console.log(post);
    res.status(201).json({
        message:'Post added sucessfully'
    });

})

app.use('/api/posts',(req,res,next)=>{
    const posts=[
        {
            id:'fadf12421l',
            title:'First server-side post',
            content:'This is comeing from the server'
        },
        {
            id:'ksajflaj232',
            title:'second server-side post',
            content:'This is comeing from the server!'
        }
    ];
    res.status(200).json({
        message:'post fetched successfully!',
        posts:posts
    });
});

module.exports=app;