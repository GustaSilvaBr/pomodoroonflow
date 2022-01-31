import React, { useEffect, useState } from 'react';

import Counter from '../components/Counter';
import { CounterContext } from '../providers/CounterProvider';

import restSoundFile from '../assets/sounds/restSound.wav';
import focusSoundFile from '../assets/sounds/focusSound.wav';

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

    const restSoundMusic = new Audio(restSoundFile);
    const focusSoundMusic = new Audio(focusSoundFile);

    function playMusicTwice(music){
        music.play();
        music.playbackRate = 2;
    }

    useEffect(() => {
        if(!isOnFocusCounting){
            playMusicTwice(focusSoundMusic);
        }
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
            playMusicTwice(restSoundMusic);
        }
    },[focusMinutesInCounting]);

    useEffect(()=>{
        const isTheMinutesCountDownFinished = restMinutesInCounting < 0;
        if(isTheMinutesCountDownFinished){
            setIsOnFocusCounting(true);
            setIsOnRestCounting(false);
            playMusicTwice(focusSoundMusic);
        }
    },[restMinutesInCounting]);

    return (
        <div className="pomodoroCounters">
            <h2>Counters</h2>
            <div className="counters">
                <Counter
                    minutes={focusMinutesInCounting}
                    setMinutes={setFocusMinutesInCounting}
                    minutesChosen={focusMinutesChosen}
                    title="Focus"
                    isOnCounting={isOnFocusCounting}
                />
                <Counter
                    minutes={restMinutesInCounting}
                    setMinutes={setRestMinutesInCounting}
                    minutesChosen={restMinutesChosen}
                    title="Rest"
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