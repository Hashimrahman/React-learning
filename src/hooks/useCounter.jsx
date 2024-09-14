import { useReducer } from "react";
const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function useCounter() {
  const [number, dispatch] = useReducer(reducer, initialState);
  return [number, dispatch];
}

export default useCounter;
