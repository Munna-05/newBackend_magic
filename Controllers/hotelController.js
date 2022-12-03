import Hotel from '../Models/Hotel.js'

export const createHotel = async (req, res, next) => {
    console.log(req.body)
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
        console.log(newHotel)

    } catch (err) {
        next(err)
    }
}
export const getallHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }

}
export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
        console.log('updated')
    } catch (error) {
        next(error)
    }
}
export const deleteHotel = async (req, res, next) => {
    await Hotel.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(200).json('Hotel details deleted')
        })
}
export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        next(error)
    }
}