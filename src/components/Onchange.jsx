import { useState } from "react";
const RealTimeChange = () => {
  const [name, setName] = useState("hello");

  const nameUpdate = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={nameUpdate} />
      <p>
        <b>Name : {name}</b>
      </p>
    </div>
  );
};

export default RealTimeChange;
