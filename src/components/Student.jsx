import React from "react";
import studentData from "./../data/studentData"

const Details = () =>{
    const data = studentData.map((item) =>{
        return(
            <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.isStudent ? "Yes" : "No"}</td>
            </tr>
        )
    })

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>IsStudent?</th>
            </tr>
            {data}
        </table>
    )
}


const data = () => {
    return (
        <Details />
    )

}

export default data;