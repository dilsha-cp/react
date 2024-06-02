import React, {useState} from 'react' //usesatate is hook.

function Counter() {
    const[count,setcount]=useState(0) //count is event that et as zero using useState.setcount is method to increase and decrease
    const[factor,setfactor]=useState(1)
    function incrementCount(){
        setcount(count+factor)
    }
    function decrementCount(){
        setcount(count-factor)
    }
    function incrementfactor(){
        setfactor(factor+1)
    }
    function decrementfactor(){
        setfactor(factor-1)
    }

  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <h1>factor:{factor}</h1>
        <button onClick={incrementfactor}>Increment</button>
        <button onClick={decrementfactor}>Decrement</button>
    </div>
  )
}

export default Counter
//rerendering.
//state change in react.
/*to set factor first declare a arra with factor element and setfactor method and using usesate set the value and use it
in function*/
/*here setcount by factor and setfactor is intialised as one when factor increase ac to that counter increase.handling multiplestate.*/ 
