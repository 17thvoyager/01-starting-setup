import Card from '../UI/Card.js'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter.js'
import ExpensesList from './ExpensesList'
import {useState} from 'react'



const Expenses = (Props) => {
    const [filteredYear,setFilteredYear] = useState('2019');

    const filterChangeHandler = year => {
        setFilteredYear(year);    
    }

    const filteredExpenses = Props.expenses.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    
    return (
    <div>
          
        <Card className="expenses">
        <ExpensesFilter  selected={filteredYear} Filter={filterChangeHandler}/>
        <ExpensesList expenses = {filteredExpenses}/>
        </Card>
    </div>
    )
}

export default Expenses;

