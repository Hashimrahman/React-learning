import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter : 0,
};

const reducer = (count, action) => {
  switch (action.type) {
    case "increment1":
      return { ...count,firstCounter: count.firstCounter + 1 };
    case "decrement1":
      return {...count, firstCounter: count.firstCounter - 1 };
    case "reset1":
      return {...count, firstCounter: 0 };
    case "increment2":
      return {...count, secondCounter: count.secondCounter + 1 };
    case "decrement2":
      return {...count, secondCounter: count.secondCounter - 1 };
    case "reset2":
      return {...count, secondCounter: 0 };
    default:
      return { firstCounter: count.firstCounter };
  }
};

const UseReducerCounter3 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>COUNTER 1 : {count.firstCounter}</h2>
          <div>
            <button onClick={() => dispatch({ type: "increment1" })}>
              Increment
            </button>
            <button onClick={() => dispatch({ type: "decrement1" })}>
              Decrement
            </button>
            <button onClick={() => dispatch({ type: "reset1" })}>Reset</button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>COUNTER 2 : {count.secondCounter}</h2>
          <div>
            <button onClick={() => dispatch({ type: "increment2" })}>
              Increment
            </button>
            <button onClick={() => dispatch({ type: "decrement2" })}>
              Decrement
            </button>
            <button onClick={() => dispatch({ type: "reset2" })}>Reset</button>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default UseReducerCounter3;
