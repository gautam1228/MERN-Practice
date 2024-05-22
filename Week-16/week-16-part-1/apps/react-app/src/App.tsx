import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@repo/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* This component can be imported directly without adding this 'Button' as a dependency to package.json because 'Button' is present in the global node modules as it was already being used by both 'web' and 'docs' apps */}

      <Button appName='react-app'>
        Hi there
      </Button>

      <div>

        <a href="https://vitejs.dev" target="_blank">

          <img src={viteLogo} className="logo" alt="Vite logo" />

        </a>

        <a href="https://react.dev" target="_blank">

          <img src={reactLogo} className="logo react" alt="React logo" />

        </a>

      </div>

      <h1>Vite + React</h1>

      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>

          count is {count}

        </button>

        <p>

          Edit <code>src/App.tsx</code> and save to test HMR

        </p>

      </div>

      <p className="read-the-docs">

        Click on the Vite and React logos to learn more

      </p>

    </>
  )
}

export default App
