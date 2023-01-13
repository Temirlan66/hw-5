import React, { useState } from "react";
import Button from "../../UI/button/Button";
import FormInput from "../../UI/formInput/FormIput";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState(null);

  const cancelHandler = (e) => {
    e.preventDefault();
    props.onSwowForm();
  };

  const titleInputChangeHadler = (event) => {
    setTitle(event.target.value);
  };

  const priceInputChangeHadler = (event) => {
    setPrice(event.target.value);
    console.log(event);
  };

  const dateInputChangeHadler = (event) => {
    setDate(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title,
      price,
      date,
    };

    props.onNewExpenseAdd(expenseData)
  };


  return (
    <form className="mainForm">
      <FormInput
        id="name"
        labelName="Заголовок"
        inputType="text"
        placeholder="Введите название"
        value={title}
        onChange={titleInputChangeHadler}
      />

      <FormInput
        labelName="Количества"
        inputType="number"
        id="price"
        value={price}
        onChange={priceInputChangeHadler}
      />

      <FormInput
        labelName="Датировать"
        inputType="date"
        placeholder="дд.мм.гггг"
        id="date"
        value={date}
        onChange={dateInputChangeHadler}
      />

      <div className="btn-div">
        <Button title="Отмена" onClick={cancelHandler} />
        <Button title="Добавить новые расходы" onClick={saveHandler} />
      </div>
    </form>
  );
};

export default ExpenseForm;
