//to get value dynamicaly we can use props and there is way of destructuring

// import React from 'react'

// function Hey(props) {
//   return (
//     <h1>hey {props.name} {props.phone}</h1>
//   )
// }

// export default Hey
//DESTRUCTURING//
import React from 'react'

function Hey({name,phone}) {
  return (
    <h1>hey {name} {phone}</h1>
  )
}

export default Hey