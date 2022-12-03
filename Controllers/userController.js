import Users from '../Models/UserModel.js'

export const getallUsers = async (req, res, next) => {
    try {
        const users = await Users.find()
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }

}
export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)
        console.log('updated')
    } catch (error) {
        next(error)
    }
}
export const deleteUser = async (req, res, next) => {
    await Users.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(200).json('User details deleted')
        })
}
export const getUser = async (req, res, next) => {
    try {
        const User = await Users.findById(req.params.id)
        res.status(200).json(User)
    } catch (error) {
        next(error)
    }
}