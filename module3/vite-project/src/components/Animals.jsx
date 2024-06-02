import React from 'react'

function Animals() {
    let animals=['cat','dog','frog']
  return (
    //<div><h1>{animals}</h1></div> it is used to get arra with out space 
    //to get efficently
   <div>
    {animals.map((animal)=>(
        <h1>{animal}</h1>
    ))}
   </div>
//to get in list
/* <div>
    <ul>
        {animals.map((animal)=>
        <li>
            {animal}
        </li>
        )}
    </ul>
</div> */
  )
}

export default Animals