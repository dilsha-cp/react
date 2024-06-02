import React from "react";
import Fruit from "./Fruit";


function Fruits() {
  let Fruits = [
    { name: "apple", price: 100},
    { name: "orange", price: 100},
    { name: "mango", price: 300 },
    { name: "pineapple", price: 350 }
  ];
  return ( 
  //IT IS USED TO GET ARRAY OBJECT//
//   <div>
//      {Fruits.map((fruit)=>(
//         <li key={fruit.name}>
//             {fruit.name}-{fruit.price}
//             </li> 
//     ))}
// </div>; 
<div>
    {Fruits.map((fruit)=>(
       <Fruit name={fruit.name} price={fruit.price}/>
    ))}

</div> 
  )
}

export default Fruits;
//key should be unique.
