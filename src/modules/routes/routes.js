const express = require('express');
const router = express.Router();

const {
  getAllExpenses,
  createNewExpense,
  deleteExistsExpens
} = require('../controllers/controllerExpenses');

router.get('/allExpenses', getAllExpenses);
router.post('/createNewExpense', createNewExpense);
router.delete('/deleteExistsExpens', deleteExistsExpens);

module.exports = router;