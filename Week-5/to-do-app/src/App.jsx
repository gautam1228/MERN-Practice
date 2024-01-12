import { useState } from 'react'
import './App.css'

function App() {
  
  const [todos, setToDos] = useState([{
    title : "To do 1",
    description : "Go for jogging 6-7AM",
    completed : false
  },{
    title : "To do 2",
    description : "Workout 7-8AM",
    completed : true
  }]);

  function addToDo(){
    setToDos([...todos, {
      title : "Random to do",
      description : "Random to do desc"
    }])
  }
  
  return (
    <div>

      <button onClick={addToDo}>Add a random to do</button>

      {todos.map((todo) => {
        return <Todo title = {todo.title} description = {todo.description}></Todo>
      })}
    </div>
  )
}

function Todo(props){


  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

export default App
