import { useState } from "react";
// const Food = () =>{
//     const [foodItem, setFood] = useState(['Mango','Banana','Apple']);

//     const foodList = foodItem.map((item,index) => <li key={index} onClick={() => foodRemove(index)}>{item}</li>);
//     const foodAdding = () =>{
//         const newFood = document.getElementById('foodInput').value
//         document.getElementById('foodInput').value = '';
//         setFood(f => [...f, newFood]);

//     }

//     function foodRemove (index) {
//         return (setFood(foodList.filter((_,i) => i!=index)))
//     }

//     return(
//         <div>
//             <h1>Food Items : </h1>
//             <ul >
//                 {foodList}
//             </ul>
//             <input id="foodInput" type="text" />
//             <button onClick={foodAdding}>Add Item</button>
//         </div>
//     )
// }

const Food = () => {
  const [food, setFood] = useState(["Mango", "Banana", "Apple"]);

  const handleFoodAdding = () => {
    const newFood = document.getElementById("foodItem").value;
    document.getElementById("foodItem").value = "";
    if (newFood.length !== 0) {
      setFood((f) => [...f, newFood]);
    } else {
      alert("Input can't be empty");
    }
  };

  const handleFoodDeletion = () => {
    // const newFood = document.getElementById("foodItem").value;
    // document.getElementById("foodItem").value = "";
    // if (newFood.length !== 0) {
        // if(food.includes(newFood)){
        //     let indexVal = food.indexOf(newFood);
        //     setFood((f) => f.filter((_,index)=> index!==indexVal))
        // }
        // else{
        //     alert("Item not found")
        // }
    // } 
    // else {
    //   alert("Input can't be empty");
    // }

    
  };

  //   const handleFoodDeletion = (index) => {
  //     setFood(food.filter((_, i) => i !== index));
  //   };

  return (
    <div>
      <h1>Food List</h1>
      <ul>
        {food.map((item, index) => (
          <li key={index}>
            {item}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleFoodDeletion}>X</button><br /><br /><br />
          </li>
          
        ))}
      </ul>
      <input type="text" id="foodItem" /><br /><br />
      <button onClick={handleFoodAdding}>Add New Food</button>&nbsp;
      <button onClick={handleFoodDeletion}>Delete Food</button>
    </div>
  );
};

export default Food;
