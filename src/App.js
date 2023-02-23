import React, { useState } from 'react';
import './App.css';
import fizzbuzz from './fizzbuzz';

function App() {
  const [number, setNumber] = useState(false)
  const [response, setResponse] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://play-lh.googleusercontent.com/f83jAB-sRh2IR7I51NASkTAa92GbDIUvFDb1wRM-l7r4iU_ybu5pH_9kQJ6ZRG5GYg=w327-h184-rw" className="App-logo" alt="logo" />
        <br />
        <input placeholder='Type number...' type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
        <br />
        <button disabled={!number} onClick={() => { setResponse(fizzbuzz(number)); setNumber(false) }}>Click for test</button>
        <br />
        <span>{response}</span>
      </header>
    </div>
  );
}

export default App;
