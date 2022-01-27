import React, {useEffect, useState} from 'react';

function Counter(props){
    const [minutes, setMinutes] = useState(Number.parseInt(props.minutes)||0);
    const [seconds, setSeconds] = useState(0);
    const [currentCounting, setCurrentCounting] = useState(getCurrentCounting);


    function getNumberCountingAux(number){
        let countingAux = number.toString().length>1?"":"0";
        return countingAux;
    }

    function getCurrentCounting(){
        const minutesAux = getNumberCountingAux(minutes);
        const secondsAux = getNumberCountingAux(seconds);
        const currentCounting = `${minutesAux}${minutes}:${secondsAux}${seconds}`;
        return currentCounting;
    }


    return(
        <div className="counter">
            <span>{currentCounting}</span>
            <button>Start focus</button>
            <button>Cancel counter</button>
            <span className="counterStatus">               
            </span>
        </div>
    )
}

export default Counter;