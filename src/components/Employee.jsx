// import React from "react";
import propsType from "prop-types"

const employeeDetails = (props) =>{
    return (
        <div>
            <p>Id : {props.id}</p>
            <p>Name : {props.name}</p>
            <p>Salary : {props.salary}</p>
        </div>
    )
}

employeeDetails.propsType = {
    id : propsType.number,
    name : propsType.string,
    salary : propsType.number,
}

employeeDetails.defaultProps = {
    id : 100,
    name : 'Guest',
    salary : '0'
}
export default employeeDetails;