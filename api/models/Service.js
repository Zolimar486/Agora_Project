const mongoose= require('mongoose')

const ServiceSchema= new mongoose.Schema({

  title:{
    type:String,

  },

  desc:{
    type:String,
  },

  img:{
    type:Object,
  },

  category:{
    type:String,
  },

  button:{
    type:String
  }
  
})

module.exports= mongoose.model("Service", ServiceSchema)