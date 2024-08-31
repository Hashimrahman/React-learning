import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Content from "./Content";

const Userefer = () => {
  const elements = [<Header />, <Content />, <Main />];

  const [view, setView] = useState(<Header />);
  const [btnId, setId] = useState(0);

  const decrement = () => {
    if (btnId > 0) {
      setId(btnId - 1);
    } else {
      setId(2);
    }
    setView(elements[btnId]);
    console.log(btnId);
  };
  const increment = () => {
    if (btnId < 2) {
      setId(btnId + 1);
    } else {
      setId(0);
    }
    setView(elements[btnId]);
    console.log(btnId);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {view}
        <button onClick={decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
    </div>
  );
};

export default Userefer;
