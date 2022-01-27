import React from 'react';

import Counter from '../components/Counter';

function Home(){
    return(
        <div id="Home">
            welcome, home
            <Counter minutes="5"/>
        </div>
    )
}

export default Home;