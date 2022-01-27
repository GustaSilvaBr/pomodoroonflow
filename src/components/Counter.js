import React, { useEffect, useState } from 'react';

function Counter(props) {
    const [minutes, setMinutes] = useState(Number.parseInt(props.focusMinutes));
    const [seconds, setSeconds] = useState(0);
    
    const [secondsIntervalCounting, setSecondsIntervalCounting] = useState();

    useEffect(()=>{
        setMinutes(Number.parseInt(props.focusMinutes));
    },[props.focusMinutes]);


    useEffect(() => { 
        const isTheSecondsCountDownFinished = seconds < 0;
        if(isTheSecondsCountDownFinished){
            discountOneMinute();
            const isTheMinutesCountDownFinished = minutes < 0;
            if(isTheMinutesCountDownFinished){
                finishCountDown();
            }else{
                resetSecondsCountDown();
            }
        }
    }, [seconds]);

    function discountOneMinute(){
        setMinutes((prevMinutes)=>prevMinutes-1);
    }

    function resetSecondsCountDown(){
        const secondsToRestartContDown = 59;
        setSeconds(secondsToRestartContDown);
    }

    function startCountDown() {
        setSecondsIntervalCounting(setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000))
    }

    function finishCountDown(){
        clearInterval(secondsIntervalCounting);
        setMinutes(props.focusMinutes);
        setSeconds(0);
    }

    function getNumberCountingAux(number) {
        let countingAux = number.toString().length > 1 ? "" : "0";
        return countingAux;
    }

    function getCurrentCounting() {
        const minutesAux = getNumberCountingAux(minutes);
        const secondsAux = getNumberCountingAux(seconds);
        const currentCounting = `${minutesAux}${minutes}:${secondsAux}${seconds}`;
        return currentCounting;
    }

    return (
        <div className="counter">
            <span>{getCurrentCounting()}</span>
            <button onClick={() => { startCountDown() }}>Start focus</button>
            <button onClick={()=>{finishCountDown()}}>Cancel counter</button>
            <span className="counterStatus">
            </span>
        </div>
    )
}

export default Counter;