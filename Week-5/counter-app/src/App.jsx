// hook
import { useState } from 'react';
import './App.css'

// ********** BASIC WAY **********

// function App() {
  
  //   const [count, setCount] = useState(0);
  
  //   function onClickHandler(){
    //     // count++; -> not the right way to set state variables
    //     setCount(count + 1);
    //   }
    
    //   return (
      //     <div>
      //       <button onClick={onClickHandler}>Counter {count}</button>
      //     </div>
      //   )
      // }
      


// ********** GOOD WAY **********

function App(){

  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count = {count} setCount = {setCount}></CustomButton>
    </div>
  )

}

// component
function CustomButton(props){

  function onClickHandler(){
    props.setCount(props.count + 1);
  }

  return (
    <button onClick={onClickHandler}>
      Counter {props.count}
    </button>
  )
  
}

export default App
