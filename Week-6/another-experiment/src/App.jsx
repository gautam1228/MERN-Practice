import { useState } from 'react'

let counter = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      id : 1,
      title : "Go to gym.",
      description : "7-8 AM"
    }, {
      id : 2,
      title : "Go running.",
      description : "6-7 AM"
    }, {
      id : 3,
      title : "Have breakfast.",
      description : "8-9 AM"
    }
  ]);

  function addToDo(){
    setTodos([...todos, {
      id : counter++,
      title : Math.random(),
      description : Math.random()
    }]);
  }
  return (
    <>
      <button onClick={addToDo}>Add to do</button>
      {todos.map(todo => <ToDo key = {todo.id} title = {todo.title} description={todo.description}></ToDo>)}    
    </>
  )
}

function ToDo({title, description}){
  return (
  <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
    <br></br>
  </div>
  )
}

export default App
