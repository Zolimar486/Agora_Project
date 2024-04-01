const express= require('express')
const mongoose= require('mongoose')
const dotenv= require('dotenv')
const cors= require('cors')
const path=require('path')
dotenv.config()
const serviceRouter = require('./routers/service')
const postRouter= require('./routers/post')



//DataBase connections

mongoose.connect(process.env.MONGO_URL)

.then(()=> console.log("MongoDb Connected"))

.catch((err)=> console.log(err))


//Middleware Functions
const app =express()
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({extended: true, limit:'50mb'}))
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())
app.get('/info', (req,res)=>{
  res.status(200).json({message:"Successfully Connected"})
})
app.use('/api/service', serviceRouter)
app.use('/api/post', postRouter)



const port=process.env.PORT || 5000


app.listen(port, ()=> console.log(`The server is running on : http://localhost:${port}`))