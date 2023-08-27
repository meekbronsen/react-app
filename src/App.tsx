import ExpenseList from './ExpenseTracker/ExpenseList'
import {useState} from 'react'

function App() {
  const [expenses, setExpenses] = useState([
   { id: 1 , description: 'milk', amount: 5, category: 'Groceries'},
   { id: 2 , description: 'Hammer', amount: 2, category: 'Utilities'},
   { id: 3 , description: 'Harry Potter', amount: 10, category: 'entertainment'}
  ])

const handler = (id: number) => setExpenses( expenses.filter( order => order.id !== id )) 

  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={ handler }></ExpenseList>
    </div>
  );
}

export default App;
