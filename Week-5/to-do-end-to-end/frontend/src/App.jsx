import { useEffect, useState } from 'react'
import { CreateToDo } from './components/CreateToDo'
import { ToDos } from './components/ToDos'

function App() {

  const [todos, setToDos] = useState([]);

  // Keeps sending infinite requests to the backend which is a really big problem.

  // fetch("http://localhost:3000/todos")
  //   .then(async (res) => {
  //     const json = await res.json();
  //     setToDos(json.todos); 
  //   });
  
  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:3000/todos")
        .then(async (res) => {
          const json = await res.json();
          setToDos(json.todos);
        });
      }, 5000);
  }, []);

  return (
    <div>
      <CreateToDo todos = {todos} setToDos = {setToDos}></CreateToDo>
      <ToDos todos={todos}></ToDos>
    </div>
  )
}

export default App
