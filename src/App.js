import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([

    {
      title: "Зубная щетка",
      price: 200,
      amount:450, 
      date: new Date()
      
    },
  ])

  const addNewExpenseHandler = (data) => {
  const updateExpenses =[...expenses]
  updateExpenses.push(data)
    setExpenses(updateExpenses)
  }


  return (
    <div className="App">
      <div className="div">
        <NewExpense onNewExpenseAdd={addNewExpenseHandler} />
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;

