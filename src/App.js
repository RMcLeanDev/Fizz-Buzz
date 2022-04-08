import React, {useState} from 'react';
import './App.scss';

function App() {

  const [numInput, setNumInput] = useState(0);
  const [error, setError] = useState(null);
  const result = [];

  function startFizzBuzz(e){
    setError(null);
    e.preventDefault();
    let number = parseInt(numInput)
    if(numInput === 0){
      setError("Number must be greater than 0")
    } else {
      console.log(10%3)
      for(let i=0; i<5; i++){
        if(number%3 === 0 && number%5 === 0){
          result.push("fizz-buzz")
        } else if(number%5 === 0){
          result.push("buzz")
        } else if(number%3 === 0){
          result.push("fizz")
        } else {
          result.push(number)
        }
        number ++;
      }
      console.log(result);
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
