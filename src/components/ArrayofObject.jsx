import { useState } from "react";

const UpdateArrayOfObject = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setYear] = useState(new Date().getFullYear());
  const [carMake, setMake] = useState("");
  const [carName, setName] = useState("");

  const handleAddCar = () => {
    const newCar = { year: carYear, make: carMake, name: carName };
    setCars((c) => [...c, newCar]);
    setYear(new Date().getFullYear());
    setMake("");
    setName("");
  };
  const handleDeleteCar = (index) => {
    setCars(c => c.filter((_,i) => i!==index))
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleMakeChange = (event) => {
    setMake(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <h2>Car Details : </h2>
      <ul>
        {cars.map((item, index) => (
          <li key={index}>
            {item.year} {item.make} {item.name}
            <button className="buttonClass"  onClick={() => handleDeleteCar(index)} style={{cursor:'pointer'}}>X</button>
          </li>
        ))}
      </ul>

      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input type="text" value={carMake} onChange={handleMakeChange} />
      <br />
      <input type="text" value={carName} onChange={handleNameChange} />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </>
  );
};

export default UpdateArrayOfObject;
