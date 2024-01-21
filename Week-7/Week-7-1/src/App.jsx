// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
// import { Landing } from '../src/components/Landing';
// import { Dashboard } from '../src/components/Dashboard';

import { useContext, useState } from "react"
import { CountContext } from "./context";



function App() {
  
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value = {{count, setCount}}>
        <CountRenderer/>
        <Buttons />
      </CountContext.Provider>
    </div>
  )
}

function CountRenderer(){
  const { count } = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons(){
  const { setCount } = useContext(CountContext);
  return <div>
    <button onClick={()=>{
      setCount(c => c + 1);
    }}>
      Increase
    </button>
    <button onClick={()=>{
      setCount(c => c - 1);
    }}>
      Decrease
    </button>
  </div>
}

// function TopBar(){

//   const navigate = useNavigate();

//   return (
//     <div>

//       <button onClick={()=>{
//         navigate('/');
//       }}>
//         Landing
//       </button>

//       <button onClick={()=>{
//         navigate('/dashboard');
//       }}>
//         Dashboard
//       </button>

//     </div>
//   )
// }

export default App
