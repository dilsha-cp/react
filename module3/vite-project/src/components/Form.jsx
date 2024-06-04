import React, { useState } from "react";

function Form() {
  const [text, settext] = useState();
  function handlechange(e) {
    settext(e.target.value);
    console.log(e);
  }
  return (
    <form>
      <input onChange={(e)=>settext(e.target.value)} type="text" value={text}></input>
      <h1>{text}</h1>
      
    </form>
  );
}

export default Form;
//using value we can access
/*with using funcion handlechange use  <input onChange={handlechange} type="text" value={text}></input>*/
