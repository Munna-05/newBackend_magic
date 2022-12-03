import  express from "express"
const router = express.Router()
import {authController} from '../Controllers/AuthController.js'

router.post('/register',authController.register)
router.get('/userDetails',authController.findUser)
router.post('/login',authController.login)


export default router; 