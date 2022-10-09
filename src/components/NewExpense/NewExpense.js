import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formShow, setFormShow] = useState(true);

  const formShowHandler = () => {
    setFormShow(!formShow);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseDate = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    formShowHandler();

    props.onAddExpense(expenseDate)
  };
  return (
    <div className="new-expense">
      {!formShow ? <button onClick={formShowHandler}>Add New Expense</button> :
      <ExpenseForm onShowForm={formShowHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
