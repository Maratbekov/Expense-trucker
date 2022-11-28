import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
    const expensesData = [
        // Data from backend
        {
            id: 'el1',
            title: 'Car Insurance',
            date: new Date(2022,1,25),
            amount: 200
        },
        {
            id: 'el2',
            title: 'Tualet paper',
            date: new Date(2022,1,25),
            amount: 5
        },
        {
            id: 'el3',
            title: 'course',
            date: new Date(2022,4,18),
            amount: 150
        },
        {
            id: 'el4',
            title: 'Utilites',
            date: new Date(2022,6,7),
            amount: 100
        }
    ]
  return (
    <div className="App">
      <NewExpense/>
      <Expenses expenses={expensesData}/>
      {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/> */}
    </div>
  );
}

export default App;
