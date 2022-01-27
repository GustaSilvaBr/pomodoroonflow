import React, {useState} from 'react';
import { useEffect } from 'react/cjs/react.development';

import Counter from '../components/Counter';
import Menu from '../components/Menu';

import pomodoroMinutes from '../utils/pomodoroMinutes.json';

function Home(){
    const [focusMinutes, setFocusMinutes] = useState(pomodoroMinutes.focus[0]);
    const [restMinutes, setRestMinutes] = useState(pomodoroMinutes.rest[0]);

    useEffect(()=>{
        console.log(focusMinutes);
    },[focusMinutes]);

    return(
        <div id="Home">
            Pomodoro on flow
            <Menu
                setFocusMinutes={setFocusMinutes}
                setRestMinutes={setRestMinutes}
            />
            <Counter 
                focusMinutes={focusMinutes}
                restMinutes={restMinutes}/>
        </div>
    )
}

export default Home;