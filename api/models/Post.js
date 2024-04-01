const mongoose= require('mongoose')

const PostSchema= new mongoose.Schema({


  nombre :{
    type:String,
    required:true,
  },

  apellido:{
    type:String
  },

  correo:{
    type:String,
  },

  profesion:{
    type:String
  },

  empresa:{
    type:String,
  },

  pais:{
    type:String,
  }

})

module.exports= mongoose.model("Post", PostSchema)