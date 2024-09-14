import { useContext } from "react";
import ComponentD from "./ComponentD";
import { myContext } from "./ComponentA";
import { newContext } from "./ComponentB";

const ComponentC = () => {

  const nameC = useContext(myContext);
  const newNAmeC = useContext(newContext)
  return (
    <div className="box">
      <h1>Component C</h1>
      <h2>{`Ooi ${nameC} ${newNAmeC}`}</h2>
      <ComponentD />
    </div>
  );
};

export default ComponentC;