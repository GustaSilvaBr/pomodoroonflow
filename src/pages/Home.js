import React from 'react';
import PomodoroCounters from '../components/PomodoroCounters';
import Menu from '../components/Menu';
import './styles.css'
import {CounterProvider} from '../providers/CounterProvider';

function Home(){

    return(
        <div id="Home">
            <h1>Pomodoro on <i>flow</i> </h1> 
            <CounterProvider>
                <Menu/>
                <PomodoroCounters/>
            </CounterProvider>
        </div>
    )
}

export default Home;