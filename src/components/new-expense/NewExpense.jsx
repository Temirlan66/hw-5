import React, { useState } from "react";
import Button from "../../UI/button/Button";
import ExpenseForm from "../expence-form/ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onNewExpenseAdd }) => {
  
  const [showForm, setShowForm] = useState(false);
  
  const showExpenseForm = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className="main-container">
      <div className="container">
        {showForm ? (
          <ExpenseForm
            onSwowForm={showExpenseForm}
            onNewExpenseAdd={onNewExpenseAdd}
          />
        ) : (
          <Button title="Добавить новый расход" onClick={showExpenseForm} />
        )}
      </div>
    </div>
  );
};

export default NewExpense;
