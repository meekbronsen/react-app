import ExpenseFilter from './ExpenseTracker/ExpenseFilter'
import ExpenseForm from './ExpenseTracker/ExpenseForm';
import ExpenseList from './ExpenseTracker/ExpenseList'
import {useState} from 'react'

export const categories = [ 'Groceries', 'Utillities', 'Entertainment'] 

function App() {
  const [ selectedCategory, setCategory] =  useState('');
  const [expenses, setExpenses] = useState([
   { id: 1 , description: 'milk', amount: 5, category: 'Groceries'},
   { id: 2 , description: 'Hammer', amount: 2, category: 'Utilities'},
   { id: 3 , description: 'Harry Potter', amount: 10, category: 'Entertainment'}
  ])

  const handler = (id: number) => setExpenses(expenses.filter( (order) => order.id !== id )) 

  const visibleExpenses = selectedCategory ? expenses.filter((expense) => expense.category === selectedCategory) : expenses

  return (
    <>
    
      <ExpenseForm></ExpenseForm>
      <div className='m-4'>
        <ExpenseFilter  onSelectCategory={(category) => setCategory(category)}></ExpenseFilter>
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={handler}></ExpenseList>
    </>
  );
}

export default App;
