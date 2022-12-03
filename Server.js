import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

import authRoute from './Routes/Auth.js'
import userRoute from './Routes/Users.js'
import hotelRoute from './Routes/Hotels.js'
import AdminRoute from './Routes/Admin.js'
import cors from 'cors'
import { MONGO,PORT } from './config/Config.js'

const app = express()


//env setup

app.use(cors())
dotenv.config()
const port = PORT ? PORT : 5001

//connection to mongodb 

const connect = async () => {
    try {
        await mongoose.connect(MONGO).then(() => {
            console.log('database connected')
        });
    } catch (err) {
        console.log(err)
    }
}
//server startup 

app.listen(port, () => {
    try {
        connect()
        console.log(`server started at port ${'http://localhost:' + port}`)
    } catch (error) {
        console.log(error)
    }
})


//routes
app.use(express.json())
app.use(cookieParser())

// app.use('/',(req,res,next)=>{
//     res.send('api running') 
//     next()
// })
// app.use('/',(req,res)=>res.send('api started'))
app.use('/users', userRoute)
app.use('/auth', authRoute)
app.use('/hotels',hotelRoute)
app.use('/admin',AdminRoute)


//middlewares

app.use((err,req,res,next)=>{
    const errStatus = err.status || 500
    const errMessage = err.message || "something went wrong"
    return res.status(errStatus).json({
        success:false,
        status:errStatus,
        message:errMessage, 
        stack:err.stack
    }) 
})  