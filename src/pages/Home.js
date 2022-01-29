import React from 'react';
import PomodoroCounters from '../components/PomodoroCounters';
import Menu from '../components/Menu';
import './styles.css'


function Home(){
    return(
        <div id="Home">
            <h1>Pomodoro on <i>flow</i> </h1> 
                <Menu/>
                <PomodoroCounters/>
        </div>
    )
}

export default Home;