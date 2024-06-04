import { useState } from "react";
import "./App.css";

import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [inputval, setinputval] = useState("");
  const [Todos, setTodos] = useState([]);
  function Writetodo(e) {
    setinputval(e.target.value);
  }
  function addTodos() {
    if (inputval != "") {
      setTodos((previoustodo) => [...previoustodo, inputval]);
      setinputval("");
    }
  }
 
  function deleteTodo(todoIndex) {
    setTodos((previoustodo) => previoustodo.filter((_, index) => index !== todoIndex));
  }

  return (
    <>
      <main>
        <h1>To Do List</h1>
        <InputContainer
          inputval={inputval}
          Writetodo={Writetodo}
          addTodos={addTodos}
        />
        <TodoContainer Todos={Todos} deleteTodo={deleteTodo} />
      </main>
    </>
  );
}

export default App;
