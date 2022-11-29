import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import { useState } from "react";

// Data from backend
const expensesData = [

  {
      id: 'el1',
      title: 'Car Insurance',
      date: new Date(2022,1,25),
      amount: 200
  },
  {
      id: 'el2',
      title: 'Tualet paper',
      date: new Date(2023,1,25),
      amount: 5
  },
  {
      id: 'el3',
      title: 'course',
      date: new Date(2024,4,18),
      amount: 150
  },
  {
      id: 'el4',
      title: 'Utilites',
      date: new Date(2022,6,7),
      amount: 100
  }
]


function App() {

  const [expenses, setExpenses] = useState(expensesData)

    const onAddExpenseHandler = (expenseObj) => {
      // setExpenses([expenseObj, ...expensesData])
      setExpenses((prevState) => {
        return [expenseObj, ...prevState]
      })
    }

  return (
    <div className="App">
      <NewExpense onAdd={onAddExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
