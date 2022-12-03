import  express, { Router } from "express"
const router = express.Router()
import {getTransaction,addtransaction,deleteTransaction,
Add_Income,get_Income,Add_Expense,get_Expense,income_get_dates,expense_get_dates
} from '../Controllers/TransactionController.js'

router.get('/transactions',getTransaction)
router.post('/addTransactions',addtransaction)
router.delete('/deleteTransaction/:id',deleteTransaction)

////
router.get('/get_income',get_Income)
router.post('/add_income',Add_Income)
router.delete('/delete_income')
router.get('/get_expense',get_Expense)
router.post('/add_expense',Add_Expense)
router.delete('/delete_expense')
router.post('/income_date',income_get_dates)
router.post('/expense_date',expense_get_dates)


export default router;   