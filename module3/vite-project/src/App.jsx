import Hello from "./components/Hello"
import Bye from "./components/Bye"
import Hey from "./components/Hey"
import Animals from "./components/Animals"
import Fruits from "./components/Fruits"
import Message from "./components/Message"
import Booking from "./components/Booking"
import Counter from "./components/Counter"
import Form from "./components/Form"
import Formobj from "./components/Formobj"







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
  <Booking name='dilsha' seats={12} phone={7846125}/>
  <Counter/>
  <Form/>
  <Formobj/>
  

 </>
  //if we want multiple component use <>comonents used here</>
 )
      
     
}

export default App
