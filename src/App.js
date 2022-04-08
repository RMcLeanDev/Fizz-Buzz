import React, {useState} from 'react';
import './App.scss';
import Footer from './Footer';

function App() {

  const [numInput, setNumInput] = useState(0);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  function startFizzBuzz(e){
    setError(null);
    e.preventDefault();
    let number = parseInt(numInput)
    let arry = [];
      for(let i=0; i<100; i++){
        if(number === 0){
          arry.push(0)
        } else if(number%3 === 0 && number%5 === 0){
          arry.push("fizz-buzz")
        } else if(number%5 === 0){
          arry.push("buzz")
        } else if(number%3 === 0){
          arry.push("fizz")
        } else {
          arry.push(number)
        }
        number ++;
      }
    setResult(arry)
  }

  return (
    <div className="App">
      <h1 className="title">Fizz-Buzz</h1>
      <p className="definition">Fizz-Buzz Rules: If a number is divisible by 3 it will turn to "Fizz". if it's divisible by 5 it will turn to "Buzz". If it's divisible by 3 and 5 it will turn to "Fizz-Buzz"</p>
      <p>Enter a number and see what happens.</p>
      {error}
      <form onSubmit={startFizzBuzz}>
        <input type="number" value={numInput} onChange={e => setNumInput(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      <div className="results">
        {result ? result.map(e => {
          return <p>{e}</p>
        }):null}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
