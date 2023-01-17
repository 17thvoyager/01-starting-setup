import './ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate.js';

function ExpenseItem (Props) {
    return (
    <Card className="expense-item">
        <ExpenseDate date={Props.date}/>
        <div className="expense-item__description">
            <h2>{Props.title}</h2>
        <div class="expense-item__price">${Props.amount}</div>
        </div>
    </Card>
 );
} 

export default ExpenseItem;