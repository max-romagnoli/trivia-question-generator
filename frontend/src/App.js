import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [message, setMessage] = useState({})

  useEffect(()=> {
    axios
        .get('http://localhost:5000/flask/hello')
        .then(response => {
            console.log("SUCCESS", response)
            setMessage(response)
        })
        .catch(error => { console.log(error) })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>TRIVIA GAME</h1>
        <div>
          {
            message.status === 200
            ? <h3>{message.data.message}</h3>
            : <h3>LOADING...</h3>
          }
        </div>
      </header>
    </div>
  );
}

export default App;