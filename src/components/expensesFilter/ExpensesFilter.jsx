import React from 'react';
import "./ExpensesFilter.css"

const ExpensesFilter = ({value, onChange}) => {
    return (
        <div className="div-month">
            <label >Фильтр по году</label>
            <select onChange={onChange} value={value}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    );
};

export default ExpensesFilter;