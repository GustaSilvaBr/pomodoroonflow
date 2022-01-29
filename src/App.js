import React, { useEffect, useState } from 'react';
import Home from './pages/Home.js';
import { CounterContext } from './providers/CounterProvider';

import backgroundDeafult from './assets/defaultgif.gif';
import backgroundFocus from './assets/citygif1.gif';
import backgroundRest from './assets/naturegif1.gif';

function App() {
  const { isOnFocusCounting, isOnRestCounting, isOnPomodoro } = React.useContext(CounterContext);
  const [backImage, setBackImage] = useState(backgroundDeafult);

  useEffect(() => {
      if (isOnFocusCounting)
        setBackImage(backgroundFocus);
      if (isOnRestCounting)
        setBackImage(backgroundRest);
      if (!isOnPomodoro) {
        setBackImage(backgroundDeafult);
      }
  }, [isOnFocusCounting, isOnRestCounting, isOnPomodoro]);

  return (
    <div className="App" style={{ backgroundImage:  `url(${backImage})`}}>
      <Home />
    </div>
  );
}

export default App;
