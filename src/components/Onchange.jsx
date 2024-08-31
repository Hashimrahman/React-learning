import { useState } from "react";
const RealTimeChange = () => {
  const [name, setName] = useState([]);
  const [name2, setName2] = useState("hii");

  const nameUpdate = () => {
    
    const newName = document.getElementById("input").value;
    setName([...name,newName," "])
    document.getElementById("input").value = "";
  };

  const nameUpdate2 = (event) =>{
    setName2(event.target.value);
  }

  return (
    <div>
      <input id="input" type="text" value={name2} onChange={nameUpdate2}/>
      <p>
        <b>Name : {name}  </b><br />
        <b>Name : {name2}</b>
      </p>
      <button onClick={nameUpdate}>Click</button>
    </div>
  );
};

export default RealTimeChange;
