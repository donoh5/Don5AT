import './App.css';
import React, { useState, useCallback, useEffect } from 'react';
import mainPage from './components/mainPage';
import Navbar from './components/navBar';

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
          <div className='main'>
            <Navbar />
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
            <div className='fadein'>
              <a
                className="App-link"
                href="https://github.com/donoh5/TDbank-Auto-Ledger"
                target="_blank"
                rel="noopener noreferrer"
              >
                Personal project!
              </a>
            </div>
            <div className='fadein'>
              <h1>Skills</h1>

              <h2>Language</h2>
              <p>C#</p>
              <p>JAVA</p>
              <p>Python</p>
              <p>C++</p>
              <p>Oracle sql</p>
              <p>Mysql</p>
              <p>HTML, CSS</p>
              <p>Javascript</p>

              <h2>Framework</h2>
              <p>.NET Framework</p>
              <p>.NET Core</p>
              <p>Springboot</p>
              <p>React</p>
            </div>
            <div className='fadein'>
              <h3>Contact me.</h3>
              <p>Email : okdonguk0@gmail.com</p>
            </div>
          </div>
        }
      </header>
    </div>
  );
}

export default App;
