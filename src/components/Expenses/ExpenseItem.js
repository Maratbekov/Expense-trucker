import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";


const ExpenseItem = (props) => {

    const expenseTitle = props.title
    const expenseDate = props.date
    const expensePrice = props.amount
    

    return (
        <div className='expense-item'>
            <ExpenseDate expenseDate = {expenseDate}/>
            <h2 className='expense-item__description'>{expenseTitle}</h2>
            <div className='expense-item__price'>${expensePrice}</div>
        </div>
    );
};

export default ExpenseItem;