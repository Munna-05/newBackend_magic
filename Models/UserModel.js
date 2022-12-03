import mongoose, { Schema } from 'mongoose'

const { schema } = mongoose

const userSchema = mongoose.Schema(
    {
        name: {
            type: String
        },
        email:{
            type:String
        },
        address: {
            type: String
        },
        password:{
            type:String
        },
        phone: {
            type: Number
        },
        signupDate:{
            type:String
        },
        isAdmin:{
            type:Boolean,
            default:false
        }

    },
    {timestamps:true} 
)

export default mongoose.model('Users',userSchema)