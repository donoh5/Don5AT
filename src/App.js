import './App.css';
import React, { useState, useCallback, useEffect } from 'react';
import mainPage from './components/mainPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [textLoaded, setTextLoaded] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setTextLoaded(true);
    }, 3000);
  }, [])

  useEffect(() => {
    setInterval(() => {
      setLoaded(true);
    }, 6000);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {!loaded && !textLoaded &&
          <h1 className='fadeinout'>
            Hello, this is Don..
          </h1>
        }
        {!loaded && textLoaded &&
          <h1 className='fadeinout'>
            Welcome to my portfolio!
          </h1>
        }
        {loaded &&
          <div className='fadein'>
            <a
              className="App-link"
              href="https://www.linkedin.com/in/donguk-oh-2a1285200/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        }
      </header>
    </div>
  );
}

export default App;
