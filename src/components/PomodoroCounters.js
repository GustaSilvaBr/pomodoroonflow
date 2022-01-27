import React, { useState, useEffect } from 'react';


import Counter from '../components/Counter';
import { CounterContext } from '../providers/CounterProvider';

function PomodoroCounters(props) {
    const { focusMinutesInCounting,
        setMinutesInCounting,
        restMinutesInCounting,
        setRestMinutesInCounting } = React.useContext(CounterContext);

    const [focusInterval, setFocusInterval] = useState();
    const [restInterval, setRestInterval] = useState();

    const [isOnFocusCounting, setIsOnFocusCounting] = useState(false);
    const [isOnRestCounting, setIsOnRestCounting] = useState(false);
    const [isOnPomodoro, setIsOnPomodoro] = useState(false);


    useEffect(()=>{
        setIsOnFocusCounting(isOnPomodoro);
        setIsOnRestCounting(isOnPomodoro);
    },[isOnPomodoro]);


    return (
        <div className="pomodorCounters">
            <div className="counters">
                <Counter
                    minutes={focusMinutesInCounting}
                    setMinutes={setMinutesInCounting}
                    title="Focus Counter"
                    isOnCounting={isOnFocusCounting}
                />
                <Counter
                    minutes={restMinutesInCounting}
                    setMinutes={setRestMinutesInCounting}
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