const router= require('express').Router()

const Post= require('../models/Post')


router.post('/', async(req,res)=> {
   try{

    const newPost = new Post(req.body)

    const savePost= await newPost.save()

    res.status(200).json(savePost)

   }catch(err){
    res.status(500).json(err)
   }

})

module.exports=router;