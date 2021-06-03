require('dotenv').config()
const express= require('express')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const userRoute = require('./routes/userRoutes')
  


//config app
const app=express();

//Midllewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use( cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
)

//conection
const url=process.env.db
mongoose.connect(url,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex:true 
    
}).then(()=>console.log('mongodb is connected'))
.catch((err)=>console.log(message.error))

//Routers middlewares
app.use('/api',userRoute)
 //listen 
 const port = 7000;
 app.listen(port,()=>console.log(`server started in port ${port}`))
