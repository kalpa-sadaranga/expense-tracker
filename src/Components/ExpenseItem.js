import './ExpenseItem.css';
import React,{useState} from 'react';
import ExpDate from './ExpDate';


function ExpenseItem(props){
    const[newTitle,setNewTitle]=useState(props.title);
    const[title,setTitle]=useState(props.title);

    const ChangeHandler=(event)=>{
        setNewTitle(event.target.value);
    }

    const clickHandler=()=> {
        setTitle(newTitle);

    };

      return (
        <div className='expense-item'>
            <div><ExpDate date={props.date}></ExpDate></div>
            <div className='expense-item_description' >
                <h2>{title}</h2>
                <div className='expense-item_price'> ${props.amount}</div>
                {/* <input type={"text"} value={newTitle} onChange={ChangeHandler}/>
                <button onClick={clickHandler}>Click Me!!</button> */}
            </div>
        </div>
    );

}

export default ExpenseItem;