import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate.js';
import {useState} from 'react';

const ExpenseItem = Props => {

    const [title, setTitle] = useState(Props.title);

    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);

    }
    return(
    <Card className="expense-item">
        <ExpenseDate date={Props.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
        <div className="expense-item__price">${Props.amount}</div>
        </div>
        <button onClick ={clickHandler}>Change Title</button>
    </Card>
 );
} 

export default ExpenseItem;