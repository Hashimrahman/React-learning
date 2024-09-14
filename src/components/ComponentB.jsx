import { createContext, useContext, useState } from "react";
import ComponentC from "./ComponentC";
import { myContext } from "./ComponentA";

export const newContext = createContext();

const ComponentB = () => {
  const nameB = useContext(myContext);
  const [newName, setNewName] = useState("Hibs");

  return (
    <div className="box">
      <h1>Component B</h1>
      <h2>{`Hii ${nameB} ${newName}`}</h2>
      <newContext.Provider value={newName}>
        <ComponentC />
      </newContext.Provider>
    </div>
  );
};

export default ComponentB;
