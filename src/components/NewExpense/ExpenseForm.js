import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /* optional another way to using common for all useSate() */
    // const [userInput, setUserInput] = useState({
        // enteredTitle: '',
        // enteredAmount: '',
        // enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        /* 
            setUserInput({
                ...userInput,
                enteredTitle : event.target.value
            })
         */
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }    

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const newExpenseData = {
            title : enteredTitle,
            amount: enteredAmount,
            date : new Date(enteredDate)
        };
        console.log(newExpenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        props.onAddNewExpense(newExpenseData);
    }
    
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min='2019-05-01' max='2022-05-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
            <button onClick={props.onHideForm} >Cancel</button> &nbsp; <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default ExpenseForm;