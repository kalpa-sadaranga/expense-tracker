
import React from "react";
import { ReactDOM } from "react";
import Total from "../Total";


const TotalExpense=(props)=>{

    return(<div className="expense-item">
                <div style={{display:"flex"}}>
                <h2 className="expense-item_description">Total</h2>
                <h2><Total></Total></h2>
                <h2 className='expense-item_price'> ${props.amount}</h2>
                </div>
        </div>);

}

export default TotalExpense;