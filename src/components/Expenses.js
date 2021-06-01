import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseItems from './ExpenseItems.js';
import ExpenseFilter from './ExpenseFilters/ExpenseFilter';

function Expenses(props) {
    
    const [filteredYear, setFilteredYear] = useState('');

    const filterByYear = (year) => {
        setFilteredYear(year);        
    }
    
    const itemList = props.expenseItems.filter((item => (item.date.getFullYear().toString() === filteredYear)));

    return (
        <div>
            <ExpenseFilter onYearChange={filterByYear} />

            { itemList.map((expense) => (
                <ExpenseItems 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
            ))}            
        </div>
    );
}

export default Expenses;