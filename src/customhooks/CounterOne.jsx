import React from "react";
import useCounter from "../hooks/useCounter";

function CounterOne() {

    const [number,dispatch] = useCounter();
    return (
      <div>
        <h2>Count two :  {number}</h2>
        <button onClick={() => dispatch({type : 'increment'})}>Increment</button>
        <button onClick={() => dispatch({type : 'decrement'})}>Decrement</button>
        <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
      </div>
    );
}

export default CounterOne;
