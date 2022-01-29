import React, { useState, useEffect } from 'react';

import pomodoroMinutes from '../utils/pomodoroMinutes.json';

export const CounterContext = React.createContext({});

export const CounterProvider = (props) => {
    const minutes = pomodoroMinutes.minutes;

    const [focusMinutesChosen, setFocusMinutes] = useState(minutes[0].focus);
    const [restMinutesChosen, setRestMinutes] = useState(minutes[0].rest);

    const [focusMinutesInCounting, setFocusMinutesInCounting] = useState(focusMinutesChosen);
    const [restMinutesInCounting, setRestMinutesInCounting] = useState(restMinutesChosen);

    const [isOnFocusCounting, setIsOnFocusCounting] = useState(false);
    const [isOnRestCounting, setIsOnRestCounting] = useState(false);
    const [isOnPomodoro, setIsOnPomodoro] = useState(false);

    useEffect(()=>{
        setFocusMinutesInCounting(focusMinutesChosen);
    },[focusMinutesChosen]);

    useEffect(()=>{
        setRestMinutesInCounting(restMinutesChosen);
    },[restMinutesChosen]);

    return (
        <CounterContext.Provider
            value={{
                minutes,

                focusMinutesChosen,
                setFocusMinutes,
                restMinutesChosen,
                setRestMinutes,

                focusMinutesInCounting,
                setFocusMinutesInCounting,
                restMinutesInCounting,
                setRestMinutesInCounting,

                isOnFocusCounting, setIsOnFocusCounting,
                isOnRestCounting, setIsOnRestCounting,
                isOnPomodoro, setIsOnPomodoro
            }}>
            {props.children}
        </CounterContext.Provider>
    )
};