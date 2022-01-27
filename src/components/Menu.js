import React from 'react';

import pomodoroMinutes from '../utils/pomodoroMinutes.json';

function Menu(props) {

    function setFocusMinutes(minute){
        props.setFocusMinutes(minute);
    }

    function setRestMinutes(minute){
        props.setRestMinutes(minute);
    }

    return (
        <div className="Menu">

            <div className="chooseMinute">
                <label htmlFor="focusMinutes">Choose your focus Minutes</label>
                <select id="focusMinutes" onChange={(event)=>{setFocusMinutes(event.target.value)}}>
                    {
                        pomodoroMinutes.focus.map((minute,index) => {
                            return (
                                <option value={minute} key={index}>{minute} mins</option>
                            )
                        })
                    }
                </select>
            </div>

            <div className="chooseMinute">
                <label htmlFor="restMinutes">Choose your rest minutes</label>
                <select id="restMinutes" onChange={(event)=>{setRestMinutes(event.target.value)}}>
                    {
                        pomodoroMinutes.rest.map((minute,index) => {
                            return (
                                <option value={minute} key={index}>{minute} mins</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default Menu;