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
    };

    return (
        <div className="new-expense">
            <ExpenseForm onAddNewExpense={newExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;