import React from 'react';
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

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;