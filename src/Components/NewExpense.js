import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpenses.css';

const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        console.log(enteredExpenseData);
        props.onAddExpense(enteredExpenseData); 
    }

    return(
        <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
            />
    );
        

}

export default NewExpense;