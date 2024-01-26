import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { signupPage } from './components/signupPage';
import { signInPage } from './components/signinPage';
import { dashBoard } from './components/dashBoard';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/signup' element = { signupPage }/>
          <Route path = '/signin' element = { signInPage }/>
          <Route path = '/dashboard' element = { dashBoard }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
