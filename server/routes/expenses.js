const express = require('express');
const { getExpenses, addExpense, updateRevenue } = require('../controllers/expenseController.js');
const router = express.Router();

router.get('/', getExpenses);
router.post('/', addExpense)
router.post('/revenue', updateRevenue);

module.exports = router;