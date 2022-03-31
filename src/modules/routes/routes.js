const express = require('express');
const router = express.Router();

const {
  getAllExpenses,
  createNewExpense,
  deleteExistsExpens,
  editExpense
} = require('../controllers/controllerExpenses');

router.get('/allExpenses', getAllExpenses);
router.post('/createNewExpense', createNewExpense);
router.delete('/deleteExistsExpens', deleteExistsExpens);
router.patch('/editExpense', editExpense);

module.exports = router;