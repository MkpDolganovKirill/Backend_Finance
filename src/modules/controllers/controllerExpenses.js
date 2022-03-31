const ExpensesSchema = require('../../db/models/expenses/index');

module.exports.getAllExpenses = async (req, res) => {
  try {
    const result = await ExpensesSchema.find();
    res.send({data: result});
  } catch (error) {
    return res.status(500).send({error: error, messaage: 'Error!'});
  };
};

module.exports.createNewExpense = async (req, res) => {
  try {
    const body = req.body;
    if (!(body.hasOwnProperty('company') && body.hasOwnProperty('date') && body.hasOwnProperty('money'))) 
      return res.status(422).send('Error! Params not found!');
    const expense = new ExpensesSchema(body);
    await expense.save();
    return res.send({expense: expense, message: 'Expense saved!'});
  } catch (error) {
    return res.status(422).send({ error: error, messaage: 'Error! Params not correct!' });
  };
};

module.exports.deleteExistsExpens = async (req, res) => {
  try {
    const expenseId = req.query.id;
    if (!expenseId) return res.status(422).send('Error! Param "id" not found!' );
    const result = await ExpensesSchema.deleteOne({ _id: expenseId });
    return result.deletedCount ? res.send('Expense delete!') : res.status(404).send('Expense not found!');
  } catch (error) {
    return res.status(422).send({ error: error, messaage: 'Error! Params not correct!' });
  };
};

module.exports.editExpense = async (req, res) => {
  try {
    const body = req.body;
    if (!(body.hasOwnProperty('id') && body.hasOwnProperty('company') && body.hasOwnProperty('date') && body.hasOwnProperty('money')))
      return res.status(422).send('Error! Params not found!');
    const result = await ExpensesSchema.updateOne({ _id: body.id }, body);
    console.log(result);
    return result.matchedCount ? res.send('Expense update!') : res.status(404).send('Expense not found!');
  } catch (error) {
    return res.status(422).send({ error: error, messaage: 'Error! Params not correct!' });
  };
};