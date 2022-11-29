import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseChart from './ExpenseChart'

const Expenses = (props) => {


  const [selectedYear, setSelectedYear] = useState('2022')
   
  const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear
  })


  const selectYearHandler = (selectedYear) => {
      setSelectedYear(selectedYear)
  }
  

  let expenseContent = <p style={{color: 'white',textAlign:'center'}}>No expense found</p>

  if(filteredExpenses.length > 0){
    expenseContent = filteredExpenses.map((el) => (
      <ExpenseItem key={el.id} title={el.title} date={el.date} amount={el.amount}/>
  ))
  }

  if(selectedYear === 'all'){
    expenseContent = props.expenses.map((el) => (
      <ExpenseItem key={el.id} title={el.title} date={el.date} amount={el.amount}/>
    ))
  }

  return (
    <Card className='expenses'>
      <ExpenseFilter onSelect={selectYearHandler} selectedValue={selectedYear}/>
      <ExpenseChart expenses={props.expenses}/>
      {expenseContent}
    </Card>
  )
}

export default Expenses