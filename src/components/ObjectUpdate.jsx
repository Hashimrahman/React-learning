import { useState } from "react";

const ObjectUpdate = () => {
  const [car, setCar] = useState({ year: 1989, make: "Toyota", name: "Supra" });

  const updateYear = (event) =>{
    setCar(c => ({...c, year: event.target.value}))
  }
  const updateMake = (event) =>{
    setCar(c => ({...c, make : event.target.value}))
  }
  const updateName = (event) =>{
    setCar(c => ({...c, name : event.target.value}))
  }

  return (
    <div>
      <p>
        Your Favourite car is{" "}
        <b>
          {car.year} {car.make} {car.name}
        </b>
      </p>
      <input type="Number" defaultValue={car.year} onChange={updateYear}/> <br />
      <input type="text" defaultValue={car.make} onChange={updateMake}/> <br />
      <input type="text" defaultValue={car.name} onChange={updateName}/> <br />
    </div>
  );
};

export default ObjectUpdate;
