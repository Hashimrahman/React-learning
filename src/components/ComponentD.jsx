import { useContext } from "react";
import { myContext } from "./ComponentA";

const ComponentD = () => {

  const name = useContext(myContext)

  return (
    <div className="box">
      <h1>Component D</h1>
      <h2>{`Bye ${name}`}</h2>
    </div>
  );
};

export default ComponentD;