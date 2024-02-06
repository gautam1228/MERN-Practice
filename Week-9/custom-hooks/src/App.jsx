import { useState } from 'react'
import { useInterval } from './hooks/UseInterval';
function App() {

  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000);

  return (
    <>
      Count is {count}.
    </>
  )
}

export default App
