const express = require('express');
const router = express.Router();

const {
  getAllExpenses,
  createNewExpense
} = require('../controllers/controllerExpenses');

router.get('/allExpenses', getAllExpenses);
router.post('/createNewExpense', createNewExpense);

module.exports = router;