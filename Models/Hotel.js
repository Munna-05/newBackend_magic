import mongoose from 'mongoose'
const {Schema} = mongoose

const HotelSchema  = new mongoose.Schema({
    name:{
        type:String,
        
    },
    type:{
        type:String,
        
    },
    city:{
        type:String,
        
    },
    address:{
        type:String,
        
    },
    photos:{
        type:[String],
        
    },
    description:{
        type:String,
        
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{
        type:[String],
    },
    price:{
        type:Number,
        
    },
})

export default mongoose.model('Hotel',HotelSchema)