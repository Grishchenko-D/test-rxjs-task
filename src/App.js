import React, { useState, useEffect } from 'react';
import './App.css';

import { interval, combineLatest } from 'rxjs';

function App() {

  const timerOne$ = interval(2000);
  const timerTwo$ = interval(3000);
  const timerThree$ = interval(4000);

  const [data, setData] = useState('');

  useEffect(() => {
    const subscription = combineLatest(
      timerOne$,
      timerTwo$,
      timerThree$,
      (one, two, three) => {

        return `Timer One (Proj) Latest: ${one}, 
                Timer Two (Proj) Latest: ${two}, 
                Timer Three (Proj) Latest: ${three}`;
      }
    ).subscribe((val) => {
      console.log(val);
      setData(val);
    });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 16000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        {data}
      </header>
    </div>
  );
}

export default App;
