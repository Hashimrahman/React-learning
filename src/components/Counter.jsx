import React, { useState } from "react";

const Counter = () => {
  const [counter, setCount] = useState(0);
  const increment = () => {
    setCount(counter + 1);
    const parent = document.getElementById("demo");
    const new1 = document.createElement("h1");
    new1.innerText = `Child ${counter+1}`;
    new1.setAttribute("id", `child${counter}`);
    parent.appendChild(new1);
  };
  const decrement = () => {
    if (counter >= 1) {
      const parent = document.getElementById(`demo`);
      const child = document.getElementById(`child${counter - 1}`);
      parent.removeChild(child);
      setCount(counter - 1);
    } else {
      alert("Cant count below zero");
    }
  };
  const reset = () => {
    setCount(0);
    const parent = document.getElementById("demo");
    parent.innerHTML = "";
  };
  return (
    <div className="counter">
      <h1>Counter : {counter}</h1>
      <div className="buttonClass">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div id="demo"></div>
    </div>
  );
};

export default Counter;
