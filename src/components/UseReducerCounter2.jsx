import { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "increment2":
      return { ...state, secondCount: state.secondCount + action.value };
    case "decrement2":
      return { ...state, secondCount: state.secondCount - action.value };
    case "reset":
      return initialState;
    default:
      return { firstCount: state.firstCount };
  }
};

const UseReducerCounter2 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        <span>Counter 1 = {count.firstCount}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>Counter 2 = {count.secondCount}</span>
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <button onClick={() => dispatch({ type: "increment", value: 1 })}>
              Counter One Increment by 1
            </button>
            <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
              Counter One Decrement by 1
            </button>
            <button onClick={() => dispatch({ type: "increment", value: 5 })}>
              Counter One Increment by 5
            </button>
            <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
              Counter One Decrement by 5
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
              Counter Two Increment by 1
            </button>
            <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
              Counter Two Decrement by 1
            </button>
            <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
              Counter Two Increment by 5
            </button>
            <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
              Counter Two Decrement by 5
            </button>
          </div>
          <button
            onClick={() => dispatch({ type: "reset" })}
            style={{ width: "100%" }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default UseReducerCounter2;
