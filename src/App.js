import './App.css';
import React, { useState, useCallback, useEffect } from 'react';
import mainPage from './components/mainPage';

function App() {
  const [mainText, setMainText] = useState("Hello, this is Don..");
  const [loaded, setLoaded] = useState(false);

  const welcomeText = useCallback(() => {
    setMainText("Welcome to my portfolio!");
  })

  useEffect(() => {
    const interv = setInterval(welcomeText, 3000);
    return () => clearInterval(interv);
  }, [welcomeText])

  useEffect(() => {
    setInterval(() => {
      setLoaded(true);
    }, 6000);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {!loaded &&
          <h1 className='fadeinout'>
            {mainText}
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
