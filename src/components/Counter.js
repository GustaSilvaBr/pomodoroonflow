import React, { useEffect } from 'react';

function Counter(props){

    useEffect(()=>{
        console.log("inOnCounting ",props.isOnCounting);
    },[props.isOnCounting]);


    return(
        <div className="counter">
            <strong>{props.title}</strong>
            <br/>
            <span>{props.minutes}</span>:<span>0</span>
        </div>
    )
}

export default Counter;