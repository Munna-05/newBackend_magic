import e from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


//local imports
import Users from '../Models/UserModel.js'
import { createError } from '../utils/error.js'



export const authController = {
    register: async (req, res, next) => {
        console.log(req.body)

        try {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            const user = await Users.find({ email: req.body.email })
            if (user == "" || user == null) {
                const details = {
                    name: req.body.username,
                    email: req.body.email,
                    address: req.body.address,
                    password: hash,
                    phone: req.body.phone,
                    signupDate: new Date()
                }
                const newUser = new Users(details)
                await newUser.save()
                const {password,isAdmin,...otherDetails} = newUser._doc
                res.status(200).json({...otherDetails})
            } else {
                res.status(500).json('user already exists')
            }
        } catch (error) {
            next(error)
        }
    },
    findUser: async (req, res, next) => {
        console.log('find user')
        if (req.body.email) {
            try {
                const user = await Users.find({ email: req.body.email })
                if (req.body.email == user.email) {
                    res.status(200).json(user)
                } else {
                    res.status(404).json('user not found')
                }
            } catch (error) {
                next(error)
            }
        } else {
            res.status(404).json('enter email address')
        }

    },
    login: async (req, res, next) => {
        try {
            const user = await Users.findOne({ email: req.body.email })
            if (!user) return next(createError(404, 'user not found'))
            const isPassword = await bcrypt.compare(req.body.password, user.password)
            if (!isPassword) return next(createError(400, 'Incorrect Password'))
            const {password,isAdmin,...otherDetails} = user._doc
            const token = jwt.sign({id:user._id , isAdmin:user.isAdmin},process.env.JWT_SECRET_KEY)
            res.cookie('access_token',token).status(200).json({...otherDetails})
        } catch (error) {
            next(error)
        }
    }
}