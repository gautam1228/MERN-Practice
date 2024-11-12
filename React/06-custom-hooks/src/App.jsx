import { useState } from "react";
import { usePost, useFetch } from "./hooks/useFetch"

function App() {

  const [postno, setPostNo] = useState(1);
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + postno);

  if(loading){
    return (
      <div>
        Loading ...
      </div>
    )
  }

  return (
    <>
      <button onClick={() => setPostNo(1)}>1</button>
      <button onClick={() => setPostNo(2)}>2</button>
      <button onClick={() => setPostNo(3)}>3</button>
      {data.title}
    </>
  )
}

export default App
