

function ExpDate(props){
    let month =props.date.toLocaleString('en-Un',{month:"long"});
    let day=props.date.toLocaleString('en-US',{day:"2-digit"});
    let year=props.date.getFullYear();
    return (<h2><div><div>{year}</div><div>{month}</div><div>{day}</div></div></h2>);
}

export default ExpDate;