import React from 'react'

function Message() {
    function Hello(){
        console.log('hello')
    }
  return (
    <button onClick={Hello}>
        Clikonme
    </button>
  )
}

export default Message
//here we add a button throw which go to a function.
//in clikon we add function name without '()'.