import React from 'react';
import PomodoroCounters from '../components/PomodoroCounters';
import Menu from '../components/Menu';

import {CounterProvider} from '../providers/CounterProvider';

function Home(){

    return(
        <div id="Home">
            <h2>Pomodoro on flow</h2> 
            <CounterProvider>
                <Menu/>
                <br/>
                <PomodoroCounters/>
            </CounterProvider>
        </div>
    )
}

export default Home;