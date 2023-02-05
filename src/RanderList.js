import React from "react";
import ExpenseItem from "./Components/ExpenseItem";



const RanderList=(props)=>{
    return(

            props.item.map(items=>(<ExpenseItem 
                                                title={items.title}
                                                amount={items.amount}
                                                date={items.date}/>)
                                    )
    )
                                    }
    



export default RanderList;