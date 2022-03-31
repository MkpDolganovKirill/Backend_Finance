const express = require('express');
const router = express.Router();

const {
  getAllExpenses
} = require('../controllers/controllerExpenses');

router.get('/allExpenses', getAllExpenses);

module.exports = router;