
import React,{ useState } from 'react';
import './NewExpenses.css';

const ExpenseForm=(props)=>{
    const[enterdTitle,setEntredTitle]=useState("");
    const[enteredAmount,setEnteredAmount]=useState("");
    const[enterdDate,setEnteredDate]=useState("");
    const titleChangeHandler=(event)=>{
        setEntredTitle(event.target.value);
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enterdTitle,
            amount:enteredAmount,
            date:new Date(enterdDate),
        }

    props.onSaveExpenseData(expenseData);    

        console.log(expenseData);
        setEntredTitle("");
        setEnteredDate("");
        setEnteredAmount("");
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label className="text_color">  Description </label>
                <input type="text" value={enterdTitle} onChange={titleChangeHandler}/>
            </div>
            <div>
                <label className="text_color">  Amount  </label>
                <input type="number" value ={enteredAmount}onChange={amountChangeHandler}/>
            </div>
            <div>
                <label className="text_color">  Date  </label>
                <input type="date" value={enterdDate} onChange={dateChangeHandler}/>
            </div>
            <button>Add Expense</button>
        </form>
    )
}

export default ExpenseForm;