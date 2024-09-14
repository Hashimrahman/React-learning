import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";
const Parent = () =>{

    const[age,setAge] = useState(20);
    const[salary,setSalary] = useState(25000);

    const incrementSalary = useCallback( () =>{
        setSalary(s => s+1000);
    },[salary])
    const incrementAge = useCallback( () =>{
        setAge(a => a+1);
    },[age])

    return(
        <div>
            <Title />
            <Count text= 'age' count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text= 'salary' count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default Parent;