import React from "react";


var total=0;

const Total=(props)=>{
    total=0;
    props.item.forEach(element => {
        total+=parseInt(element.amount);
    });
    console.log(total);
    // return<div className='expense-item'><h2>{total}</h2></div>}
       return(<div>
       <div className='expense-item_description' ><h2>Total</h2></div>
            <div className='expense-item_price'> ${total}</div>
                                                             </div> );
}


export default Total;