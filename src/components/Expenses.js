import './ExpenseItem.css';
import ExpenseItems from './ExpenseItems.js';

function Expenses(props) {
    const expenseItems = [
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
    ];

    return (
        <div>
            <ExpenseItems title={expenseItems[0].title}
            amount={expenseItems[0].amount}
            date={expenseItems[0].date}
            />

            <ExpenseItems title={expenseItems[1].title}
            amount={expenseItems[1].amount}
            date={expenseItems[1].date}
            />

            <ExpenseItems title={expenseItems[2].title}
            amount={expenseItems[2].amount}
            date={expenseItems[2].date}
            />
        </div>
    );
}

export default Expenses;