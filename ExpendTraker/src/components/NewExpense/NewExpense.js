import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (Math.random() * 100).toString(),
    };

    props.onAddExpense(expenseData)
  
  };
  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={SaveExpenseDataHandler}
        /* this is just named like this to
       make that clear its a prop expecting a 
       function*/
      />
    </div>
  );
};

export default NewExpense;
