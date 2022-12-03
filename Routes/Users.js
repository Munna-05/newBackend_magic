import  express from "express"
const router = express.Router()
import { deleteUser, getallUsers, getUser, updateUser } from "../Controllers/userController.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"


router.get('/checkAuth',verifyToken,(req,res,next)=>{
    res.send('u are authenticated')
})
router.get('/checkUser/:id',verifyUser,(req,res,next)=>{
    res.send('u are logged in and authorized')
})
router.get('/checkAdmin/:id',verifyAdmin,(req,res,next)=>{
    res.send('u are logged in and you are admin')
})
router.get('/', getallUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/:id', getUser)


export default router;