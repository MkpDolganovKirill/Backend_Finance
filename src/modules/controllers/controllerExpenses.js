const ExpensesSchema = require('../../db/models/expenses/index');

module.exports.getAllExpenses = async (req, res) => {
  try {
    const result = await ExpensesSchema.find();
    res.send({data: result});
  } catch (error) {
    return res.status(500).send({error: error, messaage: 'Error!'});
  };
};
