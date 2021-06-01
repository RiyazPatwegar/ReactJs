import { useState } from 'react';
import './components/Expenses.css';
import Expenses from './components/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense';

const dummyItems = [
  {
      id: 1,
      title : "Vandan Sweets",
      amount: 183,
      date: new Date(2021, 5, 27)
  },
  {
      id: 2,
      title : "Grossary",
      amount: 2410,
      date: new Date(2021, 5, 26)
  },
  {
      id: 3,
      title : "Internet Fees",
      amount: 700,
      date: new Date(2021, 5, 28)
  }
];

function App() {
  
  const [expenseItems, setUpdatedExpenseItems] = useState(dummyItems);
  
  const saveExpenseDataHandler = (expenseData) => {
    console.log('inserting new values to main array');
    
    setUpdatedExpenseItems((prevExpenseItems) => {
      return [expenseData, ...prevExpenseItems];
    });    
  };

  return (
    <div className="expenses">      
      <NewExpense onNewExpenseData={saveExpenseDataHandler}/>
      <Expenses expenseItems={expenseItems}/>
    </div>
  );
}

export default App;
