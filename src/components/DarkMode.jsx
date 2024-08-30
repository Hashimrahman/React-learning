// import { useState } from "react";

// const DarkMode = () => {

// const[isDarkMode, setMode] = useState(false)

// const changeMode = () =>{
//     setMode(!isDarkMode)
// }

//     return(
//         <div style={{backgroundColor:isDarkMode ? 'black' : 'white', height:'100vh', margin:'0'}}>
//             <button style={{backgroundColor:'red', padding:'10px', margin:'10px'}} onClick={changeMode}>Change Mode</button>
//         </div>
//     )
// }

// export default DarkMode;









































import { useState } from "react";

const DarkMode = () =>{

const [isDarkMode, setMode] = useState(false);

const changeMode = () =>{
    setMode(!isDarkMode);
}

return(
    <div style={{height:'100vh', display:'grid', placeItems:'center', backgroundColor: isDarkMode ? 'black' : 'white', }}>
        <div>
        <h1 style={{color: isDarkMode? 'white' : 'black'}}>Hello World</h1>
        <button onClick={changeMode} style={{width:'100%', cursor:'pointer'}}>Change Mode</button>
        </div>
    </div>
)

}
export default DarkMode;