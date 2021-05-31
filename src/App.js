import { useState } from 'react';
import './components/Expenses.css';
import Expenses from './components/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  /* const expenseItems = [
    {
        title : "Vandan Sweets",
        amount: 183,
        date: new Date(2021, 5, 27)
    },
    {
        title : "Grossary",
        amount: 2410,
        date: new Date(2021, 5, 26)
    },
    {
        title : "Internet Fees",
        amount: 700,
        date: new Date(2021, 5, 28)
    }
]; */

  const [expenseItems, setUpdatedExpenseItems] = useState([
    {
        title : "Vandan Sweets",
        amount: 183,
        date: new Date(2022, 5, 27)
    },
    {
        title : "Grossary",
        amount: 2410,
        date: new Date(2021, 5, 26)
    },
    {
        title : "Internet Fees",
        amount: 700,
        date: new Date(2020, 5, 28)
    }]);
  
  const saveExpenseDataHandler = (expenseData) => {
    console.log('inserting new values to main array');
    //expenseItems.push(expenseData);
    /* const expenseItemsData = {
      ...expenseItems,
      expenseData,     
    };    
    setUpdatedExpenseItems(expenseItemsData); */

    console.log(expenseItems);
  };

  return (
    <div className="expenses">      
      <NewExpense onNewExpenseData={saveExpenseDataHandler}/>
      <Expenses expenseItems={expenseItems}/>
    </div>
  );
}

export default App;
