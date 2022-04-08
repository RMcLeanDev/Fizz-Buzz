import React, {useState} from 'react';
import './App.scss';

function App() {

  const [numInput, setNumInput] = useState(0);
  const [error, setError] = useState(null);

  function startFizzBuzz(e){
    setError(null);
    e.preventDefault();
    if(numInput === 0){
      setError("Number must be greater than 0")
    }
  }

  return (
    <div className="App">
      <h1>Fizz-Buzz</h1>
      {error}
      <form onSubmit={startFizzBuzz}>
        <input type="number" value={numInput} onChange={e => setNumInput(e.target.value)}/>
      </form>
    </div>
  );
}

export default App;
