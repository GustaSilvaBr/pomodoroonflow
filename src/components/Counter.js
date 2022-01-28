import React, { useEffect, useState } from 'react';

function Counter(props) {
    const [seconds, setSeconds] = useState(0);
    const [secondsIntervalCounting, setSecondsIntervalCounting] = useState();

    useEffect(() => {
        if (props.isOnCounting) {
            startCountDown();
        } else {
            finishiCountDown();
        }
    }, [props.isOnCounting]);

    useEffect(() => {
        const isTheSecondsCountDownFinished = seconds < 0;
        if (isTheSecondsCountDownFinished) {
            discountOneMinute();
            resetSecondsCountDown();
        }
    }, [seconds]);

    function startCountDown() {
        setSecondsIntervalCounting(setInterval(()=>{
            discountOneSecond();
        }, 1000));
    }

    function finishiCountDown() {
        clearInterval(secondsIntervalCounting);
        setSeconds(0);
        props.setMinutes(props.minutesChosen);
    }

    function resetSecondsCountDown() {
        const secondsToRestartContDown = 59;
        setSeconds(secondsToRestartContDown);
    }

    function discountOneSecond() {
        setSeconds((prevSeconds) => prevSeconds - 1);
    }

    function discountOneMinute() {
        props.setMinutes((prevMinutes) => prevMinutes - 1);
    }

    function getFormatedTime(number){
        let countingAux = number.toString().length > 1 ? "" : "0";
        return `${countingAux}${number}`;
    }

    return (
        <div className="counter">
            <strong>{props.title}</strong>
            <br />
            <span>{getFormatedTime(props.minutes)}</span>:<span>{getFormatedTime(seconds)}</span>
        </div>
    )
}

export default Counter;