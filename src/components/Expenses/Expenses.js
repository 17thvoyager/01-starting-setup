import ExpenseItem from './ExpenseItem.js'
import Card from '../UI/Card.js'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter.js'
import {useState} from 'react'



const Expenses = (Props) => {
    const [filteredYear,setFilteredYear] = useState('2019');

    const filterChangeHandler = year => {
        setFilteredYear(year);
        console.log('Expense.js');
        console.log(year);
    }
    return (
    <div>
          
        <Card className="expenses">
        <ExpensesFilter  selected={filteredYear} Filter={filterChangeHandler}/>
        {Props.expenses.map((item) => (
            <ExpenseItem
            key = {item.id}
            title = {item.title}
            amount = {item.amount}
            date = {item.date}
            />
        ))}
        </Card>
    </div>
    )
}

export default Expenses;

