import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js'

const NewExpense = (Props) => {
    const saveExpenseDataHandler = enteredExpenseData => {
        const expeneseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        Props.onAddExpense(expeneseData);
    }

    const [AddNewExpense,setAddNewExpense] = useState(false);

    function buttonPressed () {
        setAddNewExpense(true);
    }

    function cancelButtonCall () {
        setAddNewExpense(false);
    }

    let NewExpenseCard;

    if(AddNewExpense) {

         NewExpenseCard = ( <ExpenseForm 
            onSaveExpenseData={saveExpenseDataHandler} 
            cancelButtonAttribute={cancelButtonCall}/> )
    }

    else {

        NewExpenseCard = <button type="submit" onClick={buttonPressed}>Add New Expense</button>
    }


    return (
        <div className="new-expense">
            {NewExpenseCard}
        </div>
        
    )
}

export default NewExpense;
