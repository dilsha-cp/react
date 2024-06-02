import React,{useState} from 'react'

function Formobj() {
    const [name,setName]=useState({firstName:'',lastName:''})
    function handlesubmit(e){
        e.preventDefault()
        console.log(name)
    }
  return (
    <div>
        <form>
        Firstname:<input onChange={(e)=>setName({...name,firstName:e.target.value})}type='text' value={name.firstName}/>
        LastName:<input onChange={(e)=>setName({...name,lastName:e.target.value})}type='text' value={name.lastName}/>
        <button onClick={(e)=>handlesubmit(e)}>
            submit
        </button> 
        <h1>{name.firstName}{name.lastName}</h1>
    </form>
    </div>
    
  )
}

export default Formobj
/*...name is called as spread operator it help to store value in text box, help to multiple value to get previous object*/ 