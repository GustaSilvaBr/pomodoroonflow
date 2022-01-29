import React, { useState, useEffect } from 'react';


import Counter from '../components/Counter';
import { CounterContext } from '../providers/CounterProvider';

function PomodoroCounters() {
    const { focusMinutesInCounting,
        setFocusMinutesInCounting,
        restMinutesInCounting,
        setRestMinutesInCounting,
        focusMinutesChosen,
        restMinutesChosen
     } = React.useContext(CounterContext);

    const [isOnFocusCounting, setIsOnFocusCounting] = useState(false);
    const [isOnRestCounting, setIsOnRestCounting] = useState(false);
    const [isOnPomodoro, setIsOnPomodoro] = useState(false);


    useEffect(()=>{
        setIsOnFocusCounting(isOnPomodoro);
        if(!isOnPomodoro){
            setIsOnRestCounting(isOnPomodoro);
        }
    },[isOnPomodoro]);

    useEffect(()=>{
        const isTheMinutesCountDownFinished = focusMinutesInCounting < 0;
        if(isTheMinutesCountDownFinished){
            setIsOnFocusCounting(false);
            setIsOnRestCounting(true);
        }
    },[focusMinutesInCounting]);

    useEffect(()=>{
        const isTheMinutesCountDownFinished = restMinutesInCounting < 0;
        if(isTheMinutesCountDownFinished){
            setIsOnFocusCounting(true);
            setIsOnRestCounting(false);
        }
    },[restMinutesInCounting]);

    return (
        <div className="pomodoroCounters">
            <div className="counters">
                <Counter
                    minutes={focusMinutesInCounting}
                    setMinutes={setFocusMinutesInCounting}
                    minutesChosen={focusMinutesChosen}
                    title="Focus Counter"
                    isOnCounting={isOnFocusCounting}
                />
                <Counter
                    minutes={restMinutesInCounting}
                    setMinutes={setRestMinutesInCounting}
                    minutesChosen={restMinutesChosen}
                    title="Rest Counter"
                    isOnCounting={isOnRestCounting}
                />
            </div>
            <button onClick={() => { setIsOnPomodoro(!isOnPomodoro) }}>
                {isOnPomodoro ? ("Cancel") : ("Start")}
                <strong> pomodoro</strong> on <i>flow</i> </button>
        </div>
    )
}

export default PomodoroCounters;