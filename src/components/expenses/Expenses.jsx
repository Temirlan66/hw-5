import React from "react";
import { useState } from "react";
import ExpenseItem from "../expenseItem/ExpenceItem";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import "./Expenses.css";
import Chart from '../chart/Chart';

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredItems = expenses.filter((element) => {
    const stringYear = new Date(element.date).getFullYear().toString();
    return stringYear === selectedYear;
  });
  console.log(filteredItems);
  return (
    <div className="main-container">
      <ul className="ul_ka">
        <ExpensesFilter value={selectedYear} onChange={yearChangeHandler} />
        <Chart items={filteredItems} />
        {filteredItems.map((expense, index) => (
          <ExpenseItem
            key={index}
            price={expense.price}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default Expenses;

