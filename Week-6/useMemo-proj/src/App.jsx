import { useState } from 'react'

function App() {
  
  const [count, setCount] = useState(0);

  const [num, setNum] = useState(0);

  function SumCalc({num}){
    num = parseInt(num);
    return(
      <div>
        Sum is : {num*(num+1)/2}
      </div>
    )
  }
  return (
    <>
      <input type = "text" placeholder="number" onChange={(e) => {
        setNum(e.target.value ? e.target.value : 0);
      }}/>
      <SumCalc num = {num}/>
      <button onClick = {() => {
        setCount(count+1);
      }}>Counter {count}</button>
    </>
  )
}

export default App
