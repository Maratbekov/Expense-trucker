import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        // Data from backend
        {
            id: 'el1',
            title: 'Car Insurance',
            date: new Date(2022,1,25),
            price: 200
        },
        {
            id: 'el2',
            title: 'Tualet paper',
            date: new Date(2022,1,25),
            price: 5
        },
        {
            id: 'el3',
            title: 'course',
            date: new Date(2022,4,18),
            price: 150
        },
        {
            id: 'el4',
            title: 'Utilites',
            date: new Date(2022,6,7),
            price: 100
        }
    ]
  return (
    <div className="App">
      <h1>hello world</h1>
      <ExpenseItem items={expenses[0]}/>
      <ExpenseItem items={expenses[1]}/>
      <ExpenseItem items={expenses[2]}/>
      <ExpenseItem items={expenses[3]}/>
    </div>
  );
}

export default App;
