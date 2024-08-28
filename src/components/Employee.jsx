// import React from "react";
// import propsType from "prop-types";
import employeeData from "./../data/employeeDetails"

const employeeDetails = () => {
  const details = employeeData.map((item) => {
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.salary}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>SALARY</th>
        </tr>
        {details}
      </table>
    </div>
  );
};


// employeeDetails.propsType = {
//   id: propsType.number,
//   name: propsType.string,
//   salary: propsType.number,
// };

// employeeDetails.defaultProps = {
//   id: 100,
//   name: "Guest",
//   salary: "0",
// };
export default employeeDetails;
