import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseHandler = (expenseDate) => {
    const dataWithId = {
      ...expenseDate,
      id: Math.random().toString()
    }

    props.onAdd(dataWithId)
  }
  return (
    <div className='new-expense'>
          <ExpenseForm onSaveExpense={saveExpenseHandler}/>
    </div>
  )
}

export default NewExpense