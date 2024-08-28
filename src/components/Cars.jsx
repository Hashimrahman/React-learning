import React from "react";
import carData from "./../data/carData";

const Details = () => {
  const carDetails = carData.map((items) => (
    <tr>
      <td>{items.name}</td>
      <td>{items.company}</td>
    </tr>
  ));
  return (
    <table className="cartable">
      <tr>
        <th>Name</th>
        <th>Company</th>
      </tr>
      {carDetails}
    </table>
  );
};

const cars = () => {
  return <Details />;
};

export default cars;
