import React from "react";

function inputContainer({inputval,Writetodo,addTodos}) {
  return (
    <div className="input-container">
      <input type="text" value={inputval} onChange={Writetodo} placeholder="Enter a task" />
      <button onClick={addTodos}>+</button>
    </div>
  );
}

export default inputContainer;
