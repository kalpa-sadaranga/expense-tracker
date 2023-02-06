import Card from "./Components/Card";
import './App.css';
import NewExpense from "./Components/NewExpense";
import RanderList from "./RanderList"
import {useState} from 'react';
import Total from "./Total";

    let DUMMY_EXPENSES=[
    //     {
    // id: 1,
    // title: "School Fees",
    // amount: 250,
    // date: new Date(2022,3,22)  
    // },
];
function App(){
    const[expenses,setExpenses]=useState(DUMMY_EXPENSES);
    const addExpenseHandler = (expense) =>{
        const updatedExpense=[...expenses,expense];
        setExpenses(updatedExpense);
        console.log(updatedExpense);
    }
    console.log(expenses);
        return (
           <div>
            <h1 className="title">Expense Tracker</h1>
            <Card className="expenses">
                <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            </Card>
            <Card className="expenses">{
                    <RanderList item={expenses}/>}
            </Card>
            <Card className="expenses">{
                <Total item={expenses}></Total>
            }
            </Card>    
      
            </div> 
    );
}

export default App;