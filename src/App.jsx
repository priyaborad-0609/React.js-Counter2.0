import { useState } from 'react';
import app from './style/App.css';


function App() {
  const [count, setCount] = useState(0);

  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (  
    <div>
      <div className="container">
        <h1 className="heading">Welcome to Counter 2.0</h1>
        <div>
          <button data-testid="minusonebtn" className="minusbtn" onClick={() => setCount(count - 1)} disabled={count === 0}>-1</button>
          <button data-testid="plusonebtn" className="plusbtn" onClick={() => setCount(count + 1)}>+1</button>
          <div>
            <button data-testid="resetbtn" className="resetbtn" onClick={() => setCount(0)}>Reset Count</button>
          </div>
        </div>
        <span data-testid="counter" className="number">{count}</span>
        <div>
          <span data-testid="odd-or-even" className="odd-even">This Number is : {count % 2 === 0 ? "Even" : "Odd"}</span><br />
          <span data-testid="is-prime" className="prime">Prime Number : {isPrime(count).toString()}</span>
        </div>
      </div>
    </div>
  );

}

export default App;

