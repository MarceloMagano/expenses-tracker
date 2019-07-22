const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true },
  username: { type: String, required: true }
})

const Expense = mongoose.model('Expense', expenseSchema)
module.exports = Expense
