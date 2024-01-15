import { useState } from 'react'

function App() {
  return (
    <>
      <HeaderWithButton/>
      <Header title = {"My name is Gautam1."}></Header>
    </>
  )
}

function HeaderWithButton(){
  const [firstTitle, setFirstTitle] = useState("Gautam.");

  function changeTitle(){
    setFirstTitle(`${Math.random()}`);
  }

  return (
    <>
      <button onClick={changeTitle}>Click me to change the title.</button>
      <Header title = {`My name is ${firstTitle}`}></Header>
    </>
  )

  // ************************* NOTE ************************

  // - Whenever we are traversing an array, it's important to include the ' key ' for each element
  // as it helps to react to re-render components more optimally.

  // e.g. todos.map(todo => <ToDo key = { todo.id } title = {todo.title} description = {todo.description})

} 

function Header({title}){
  return (
    <div>
      {title}
    </div>
  )
}

export default App
