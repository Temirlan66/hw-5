import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, price }) => {
  return (
    <div className="itemDiv">
      <div className="left-side">
        <p className="p-date">{date.toString()}</p>
        <p className="title">{title}</p>
      </div>
      <p className="price">$ {price}</p>
    </div>
  );
};

export default ExpenseItem;
