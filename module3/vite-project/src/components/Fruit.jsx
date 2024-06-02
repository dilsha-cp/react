import React from 'react'

function Fruit({name,price}) {
  return (
    <>
   <li>The price of {name} is {price}
    {price >100 ? <h3>The price of {name} is {price}</h3> :" "}
    </li>
   </>
     )
}

export default Fruit

// condition statement 
// ? : 
// ?-->for if
// :-->for else

