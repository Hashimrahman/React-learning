import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("orange");

  const picker = (event) => {
    setColor(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h1>Color Picker</h1>
      <div
        style={{
          backgroundColor: color,
          width: "50%",
          height: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Color : {color}
      </div>
      <div>
        <label>Select A Color : </label>
        <input type="color" value={color} onChange={picker} />
      </div>
    </div>
  );
};

export default ColorPicker;
