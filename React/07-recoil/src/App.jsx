import { useState } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";
import './App.css'

function App() {

  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  )
}

function Counter(){
  return <div>
    <CurrentCount/>    
    <Increase />
    <Decrease />
  </div>
}

const CurrentCount = () => {
  const count = useRecoilValue(counterAtom);
  return (
    <div>
      {count}
    </div>
  )
}

const Increase = () => {

  const setCount = useSetRecoilState(counterAtom);
  
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
  )
}

const Decrease = () => {
  
  const setCount = useSetRecoilState(counterAtom);

  return (
    <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
  )
}

export default App
