const router= require('express').Router()
const {cloudinary} = require('../utils/cloudinary')
const Service= require('../models/Service')



router.post('/', async(req,res)=> {
   
  const {title, desc, img, category, button}= req.body

    try{
      if(img){
        const uploadResp= await cloudinary.uploader.upload(img, {
          upload_preset:"agora2024"
        })
    
        if(uploadResp){
          const newService = new Service({
            title,
            desc,
            img:uploadResp,
            category,
            button
          })
          const saveService= await newService.save()
    
          res.status(200).json(saveService)
        }
      }
    

    }catch(err){
      res.status(500).json(err)
    }
})


router.get('/', async(req,res)=> {
   try{

    const getService= await Service.find()
    res.status(200).json(getService)

   }catch(err){
    res.status(500).json(err)
   }
})


module.exports=router