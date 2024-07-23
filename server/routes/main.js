const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//routes
//home 
router.get('',async (req,res)=>{
    let count;
    try{
        const locals = {
            title : "SDS News Portal",
            description : "This is SDS News Portal"
        }
        
        let perPage = 5;
        let page = req.query.page || 1;
        
        const data = await Post.aggregate([{$sort:{ updatedAt: -1}}])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();
        
        const count = await Post.countDocuments();
        const nextPage = parseInt(page)+1;
        const hasNextPage = nextPage <= Math.ceil(count/perPage);

        res.render('index',{
            locals,
            data,
            current: page,
            nextPage: hasNextPage ? nextPage : null
        });
    }catch(error){
    console.log(error);
    } 
});





router.get('/Politics',async (req,res)=>{
    let count;
    try{
        const locals = {
            title : "SDS News Portal",
            description : "This is SDS News Portal"
        }
        
        let perPage = 10;
        let page = req.query.page || 1;
        
        const data = await Post.aggregate([{$sort:{ updatedAt: -1}}])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();
        
        const count = await Post.countDocuments();
        const nextPage = parseInt(page)+1;
        const hasNextPage = nextPage <= Math.ceil(count/perPage);

        res.render('index',{
            locals,
            data,
            current: page,
            nextPage: hasNextPage ? nextPage : null
        });
    }catch(error){
    console.log(error);
    } 
    
});

router.get('/Sports',async (req,res)=>{
    let count;
    try{
        const locals = {
            title : "SDS News Portal",
            description : "This is SDS News Portal"
        }
        
        let perPage = 10;
        let page = req.query.page || 1;
        
        const data = await Post.aggregate([{$sort:{ updatedAt: -1}}])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();
        
        const count = await Post.countDocuments();
        const nextPage = parseInt(page)+1;
        const hasNextPage = nextPage <= Math.ceil(count/perPage);

        res.render('index',{
            locals,
            data,
            current: page,
            nextPage: hasNextPage ? nextPage : null
        });
    }catch(error){
    console.log(error);
    } 
    
});

router.get('/Entertainment',async (req,res)=>{
    let count;
    try{
        const locals = {
            title : "SDS News Portal",
            description : "This is SDS News Portal"
        }
        
        let perPage = 10;
        let page = req.query.page || 1;
        
        const data = await Post.aggregate([{$sort:{ updatedAt: -1}}])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();
        
        const count = await Post.countDocuments();
        const nextPage = parseInt(page)+1;
        const hasNextPage = nextPage <= Math.ceil(count/perPage);

        res.render('index',{
            locals,
            data,
            current: page,
            nextPage: hasNextPage ? nextPage : null
        });
    }catch(error){
    console.log(error);
    } 
    
});


router.get('/Finance',async (req,res)=>{
    let count;
    try{
        const locals = {
            title : "SDS News Portal",
            description : "This is SDS News Portal"
        }
        
        let perPage = 10;
        let page = req.query.page || 1;
        
        const data = await Post.aggregate([{$sort:{ updatedAt: -1}}])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();
        
        const count = await Post.countDocuments();
        const nextPage = parseInt(page)+1;
        const hasNextPage = nextPage <= Math.ceil(count/perPage);

        res.render('index',{
            locals,
            data,
            current: page,
            nextPage: hasNextPage ? nextPage : null
        });
    }catch(error){
    console.log(error);
    } 
    
});

// get 
// post : id

router.get('/post/:id',async (req,res)=>{
    let slug
    try{
        slug = req.params.id;
        const data = await Post.findById({_id : slug});
        const locals = {
            title : data.title,
            description : "This is SDS News Portal"
        }
        res.render('post',{locals,data});
    }catch(error){
    console.log(error);
    } 
});


// post
// searchTerm



router.post('/search',async (req,res)=>{
    let searchTerm;
    try{
        const locals = {
            title : "search",
            description : "search the site"
        }
        searchTerm = req.body.searchTerm;
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g,"");
        const data = await Post.find({
            $or: [
                {title: {$regex: new RegExp(searchNoSpecialChar,'i')}},
                {body: {$regex: new RegExp(searchNoSpecialChar,'i')}}
            ]
        })
            
        // res.render('search',{locals,data});
        res.render("search",{
            data,
            locals
        });
    }catch(error){
    console.log(error);
    } 
});











// function insertPostData(){
//     Post.insertMany([{
//         title : "Building a post",
//         body: "This is the body"
//     },{
//         title : "Building a post",
//         body: "This is the body"
//     },{
//         title : "Building a post",
//         body: "This is the body"
//     },{
//         title : "Building a post",
//         body: "This is the body"
//     },{
//         title : "Building a post",
//         body: "This is the body"
//     }
// ])
// }
// insertPostData();







module.exports = router;
