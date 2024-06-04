import React from 'react'

function Todo({todo,index,deleteTodo}) {
  return (
    <div className="task">
        <p>{todo}</p>
        <div className="action">
          <input type="checkbox" />
          <button onClick={()=>deleteTodo(index)}>Delete</button>
        </div>
      </div>
  )
}

export default Todo