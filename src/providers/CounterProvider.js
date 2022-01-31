import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import pomodoroMinutes from '../utils/pomodoroMinutes.json';

export const CounterContext = React.createContext({});

export const CounterProvider = (props) => {
    const minutes = pomodoroMinutes.minutes;

    const [focusMinutesChosen, setFocusMinutes] = useState(minutes[0].focus);
    const [restMinutesChosen, setRestMinutes] = useState(minutes[0].rest);

    const [focusMinutesInCounting, setFocusMinutesInCounting] = useState(focusMinutesChosen);
    const [restMinutesInCounting, setRestMinutesInCounting] = useState(restMinutesChosen);

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
                setRestMinutesInCounting
            }}>
            {props.children}
        </CounterContext.Provider>
    )
};