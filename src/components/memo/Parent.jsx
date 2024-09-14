import { useState } from "react";
import { MemoChild } from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Hashim");
  const [isTrue, setIsTrue] = useState(true);

  const handleNameChange = () => {
    console.log("Button Clicked");

    setIsTrue(!isTrue);
    if (!isTrue) {
      setName("Hashim");
    } else {
      setName("Hibs");
    }
  };

  console.log("Parent Rendered");

  return (
    <>
      <h1>Count = {count}</h1>
      {/* <h2>Name = {name}</h2> */}
      <MemoChild name={name} />
      <button onClick={() => setCount((c) => c + 1)}>Count</button>
      <button onClick={handleNameChange}>Change Name</button>
    </>
  );
};

export default Parent;
