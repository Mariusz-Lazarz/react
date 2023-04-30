import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setConditionForm(false)
  };
  const [conditionForm, setConditionForm] = useState(false);
  const startEditingHandler = () => {
    setConditionForm(true);
  };
  const stopEditingHandler = () => {
    setConditionForm(false)
  }
  return (
    <div className="new-expense">
      {!conditionForm && <button className="new-expense" onClick={startEditingHandler}>
        Add new expense
      </button>}
      {conditionForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
      
    </div>
  );
};

export default NewExpense;
