import React from "react";
import Todo from "./Todo";

function TodoContainer({ Todos,deleteTodo}) {
  return (
    <div className="container">
      {Todos.map((todo,index) => {
        return(
            <Todo todo={todo} index={index} deleteTodo={deleteTodo}/>
        ) 
        
      })}
    </div>
  );
}

export default TodoContainer;
