import ExpenseItem from './ExpenseItem.js'
import Card from '../UI/Card.js'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter.js'
import {useState} from 'react'



const Expenses = (Props) => {
    const [filteredYear,setFilteredYear] = useState('2019');

    const filterChangeHandler = year => {
        setFilteredYear(year);    
    }

    const filteredExpenses = Props.expenses.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p> No expenses found. </p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((item) => (
            <ExpenseItem
            key = {item.id}
            title = {item.title}
            amount = {item.amount}
            date = {item.date}
            />
        ));    
    }
    
    return (
    <div>
          
        <Card className="expenses">
        <ExpensesFilter  selected={filteredYear} Filter={filterChangeHandler}/>
        {expensesContent}
        </Card>
    </div>
    )
}

export default Expenses;

