import './ExpenseItem.css';
import ExpenseItems from './ExpenseItems.js';
import ExpenseFilter from './ExpenseFilters/ExpenseFilter';

function Expenses(props) {
    
    const filterByYear = (yearData) => {
        console.log('Selected Year received in parent component');
        console.log(yearData);
    }

    return (
        <div>
            <ExpenseFilter onYearChange={filterByYear} />
            <ExpenseItems title={props.expenseItems[0].title}
            amount={props.expenseItems[0].amount}
            date={props.expenseItems[0].date}
            />

            <ExpenseItems title={props.expenseItems[1].title}
            amount={props.expenseItems[1].amount}
            date={props.expenseItems[1].date}
            />

            <ExpenseItems title={props.expenseItems[2].title}
            amount={props.expenseItems[2].amount}
            date={props.expenseItems[2].date}
            />
        </div>
    );
}

export default Expenses;