import Transaction from '../Models/Transaction.js'
import { createError } from '../utils/error.js'
import Income from '../Models/Income.js'
import Expense from '../Models/Expense.js'

export const getTransaction = async (req, res, next) => {
    try {
        console.log('first')
        const transaction = await Transaction.find()
        return res.status(200).json(transaction)
    } catch (error) {
        console.log(error)
        next(createError(404, "no transaction data found"))
    }
}

export const addtransaction = async (req, res, next) => {
    try {
        const transaction = new Transaction(req.body)
        await transaction.save()
        return res.status(200).json({ success: true, data: transaction })
    } catch (error) {
        next(createError(404, error))

    }
}

export const deleteTransaction = async (req, res, next) => {
    try {
        await Transaction.findByIdAndDelete(req.params.id)
        return res.status(200).json({ success: true, data: 'Transaction Deleted' })
    } catch (error) {
        next(createError(500, error))
    }
}
export const Add_Income = async (req, res, next) => {
    console.log(req.body)
    try {
        const income = new Income(req.body)
        await income.save()
        return res.status(200).json({ success: true, data: income })
    } catch (error) {
        next(createError(404, error))


    }
}
export const Add_Expense = async (req, res, next) => {
    try {
        const expense = new Expense(req.body)
        await expense.save()
        return res.status(200).json(expense)

    } catch (error) {
        next(createError(404, error))
    }
}
export const get_Income = async (req, res, next) => {
    try {
        const income = await Income.find().sort({createdAt:-1})
        res.status(200).json(income)
    } catch (error) {
        next(createError(404, error))

    }
}
export const get_Expense = async (req, res, next) => {
    try {
        const expense = await Expense.find().sort({createdAt:-1})
        res.status(200).json(expense) 
    } catch (error) {
        next(createError(404, error))

    }
} 
export const income_get_dates = async(req,res,next)=>{
    try {
        const dates = await Income.find({date:req.body.date})
        res.status(200).json(dates)
    } catch (error) {
        next(createError(400,'date not found'))
    }
    
}
export const expense_get_dates = async(req,res,next)=>{
    try {
        const dates = await Expense.find({date:req.body.date})
        res.status(200).json(dates)
    } catch (error) {
        next(createError(400,'date not found'))
    }

}
