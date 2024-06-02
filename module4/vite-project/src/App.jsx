
import "./App.css"

function App() {
  

  return (
    <>
      <main>
        <h1>To Do List</h1>
      </main>
   
    <div className='input-container'>
    <input type="text" placeholder="Enter a task" />
    <button>+</button>
    </div>
    <div className="container">
      <div className="task">
        <p>go to class</p>
        <div className="action">
          <input type="checkbox"/>
          <button>Delete</button>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
