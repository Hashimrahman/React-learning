import React from "react";

const Child = ({name})=>{

    console.log('Child Rendered');
    return(
        <>
            <h2>{name}</h2>
        </>
    )
}

export default Child;
export const MemoChild = React.memo(Child)