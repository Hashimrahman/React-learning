import { createContext, useContext, useState } from "react";
import ComponentB, { newContext } from "./ComponentB";

export const myContext = createContext();

const ComponentA = () => {
  const [name, setName] = useState("Hashim");
  const newName = useContext(newContext)
  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${name} ${newName}`}</h2>
      <myContext.Provider value={name}>
        <ComponentB />
      </myContext.Provider>
    </div>
  );
};

export default ComponentA;
