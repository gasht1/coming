import "./App.css";
import {useState} from 'react';

const App = () => {
const [count, setcount] =useState(0);
  return (
    <div className="App">
      <button onClick={() => setcount((prevcont) =>prevcont-1)} >-</button>
      <h1>{count}</h1>
      <button onClick={() => setcount((prevcont) =>prevcont+1)}>+</button>




     
    </div>
  );
};

export default App;




