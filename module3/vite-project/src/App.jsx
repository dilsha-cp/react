import Hello from "./components/Hello"
import Bye from "./components/Bye"
import Hey from "./components/Hey"
import Animals from "./components/Animals"
import Fruits from "./components/Fruits"
import Message from "./components/Message"



function App() {
 return(
  <>
  <Hello/>
  <Bye/>
  <Hey name='dilsha' phone='8755824'/>
  <Hey name='adam' phone='785462'/>
  <Animals/>
  <Fruits/>
  <Message/>

 </>
  //if we want multiple component use <>comonents used here</>
 )
      
     
}

export default App
