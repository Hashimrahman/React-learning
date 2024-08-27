import React from "react";
const data = (props) => {
    return (
        <div className="studentData">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {(props.isStudent) ? "Yes" : "No"}</p>
        </div>
    )

}

export default data;