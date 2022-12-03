import express from 'express'
import { createHotel, deleteHotel, getallHotels, getHotel, updateHotel } from '../Controllers/hotelController.js'
const router = express.Router()



router.get('/', getallHotels)
router.post("/", createHotel)
router.put('/:id', updateHotel)
router.delete('/:id', deleteHotel)
router.get('/:id', getHotel)


export default router;
