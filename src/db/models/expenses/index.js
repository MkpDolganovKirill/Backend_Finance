const mongoose = require('mongoose');

const { Schema } = mongoose;

const extensesSchema = new Schema({
  company: String,
  date: Date,
  money: Number
});

module.exports = ExpensesSchema = mongoose.model("expenses", extensesSchema);