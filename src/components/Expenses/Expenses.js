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
            <ExpenseItem 
            title={Props.expenses[0].title}
            amount={Props.expenses[0].amount}
            date={Props.expenses[0].date}
            />
            <ExpenseItem
            title={Props.expenses[1].title}
            amount={Props.expenses[1].amount}
            date={Props.expenses[1].date}
            />
            <ExpenseItem
            title={Props.expenses[2].title}
            amount={Props.expenses[2].amount}
            date={Props.expenses[2].date}
            />
            <ExpenseItem
            title={Props.expenses[3].title}
            amount={Props.expenses[3].amount}
            date={Props.expenses[3].date}
            />
            <ExpenseItem
            title={Props.expenses[4].title}
            amount={Props.expenses[4].amount}
            date={Props.expenses[4].date}
            />
            <ExpenseItem
            title={Props.expenses[5].title}
            amount={Props.expenses[5].amount}
            date={Props.expenses[5].date}
            />
            <ExpenseItem
            title={Props.expenses[6].title}
            amount={Props.expenses[6].amount}
            date={Props.expenses[6].date}
            />
        </Card>
    </div>
    )
}

export default Expenses;

