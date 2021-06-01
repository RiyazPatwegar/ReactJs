import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const newExpenseDataHandler = (newExpense) => {
        console.log('this is newExpense js');
        const newExpenseData = {
            ...newExpense,
            id: Math.random().toString()
        }
        console.log(newExpenseData);        

        props.onNewExpenseData(newExpenseData);
        setShowForm(false);
    };

    const [showForm, setShowForm] = useState(false);

    const showFormHandler = (event) => {
        setShowForm(true);
    }

    const hideFormHandler = (event) => {
        setShowForm(false);
    }

    return (
        <div className="new-expense">
            {!showForm === true  && <button onClick={showFormHandler}>Add Expense</button> }
            {showForm && <ExpenseForm onHideForm={hideFormHandler} onAddNewExpense={newExpenseDataHandler}/>}
        </div>
    )
}

export default NewExpense;