import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import { Landing } from '../src/components/Landing';
import { Dashboard } from '../src/components/Dashboard';


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <TopBar/>
        <Routes>
          <Route path = '/' element = {<Landing/>}/>
          <Route path = '/dashboard' element = {<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function TopBar(){

  const navigate = useNavigate();

  return (
    <div>

      <button onClick={()=>{
        navigate('/');
      }}>
        Landing
      </button>

      <button onClick={()=>{
        navigate('/dashboard');
      }}>
        Dashboard
      </button>

    </div>
  )
}

export default App
