import { Routes, BrowserRouter, Route } from 'react-router-dom';

import { SignupPage } from './pages/SignupPage';
import { SignInPage } from './pages/SigninPage';
import { DashBoard } from './pages/DashBoard';
import { SendMoneyPage } from './pages/SendMoneyPage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/signup' element = { <SignupPage/> }/>
          <Route path = '/signin' element = { <SignInPage/> }/>
          <Route path = '/dashboard' element = { <DashBoard/> }/>
          <Route path = '/send' element = { <SendMoneyPage/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App