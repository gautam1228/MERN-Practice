import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from "./store/atoms/counter";
import { evenSelector } from "./store/selectors/isEvenSelector"

function App() {

  return (
    <>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </>
  )

}

const Counter = () => {
  return (
    <div>
      <Increase/>
      <Decrease/>
      <CurrenCount/>
      <IsEven/>
    </div>
  )
}

const IsEven = () => {
  
  const isEven = useRecoilValue(evenSelector);
  
  return (
    <div>
      {isEven ? "Even" : "Odd"}
    </div>
  )
}

const CurrenCount = () => {
  const count = useRecoilValue(counterAtom);
  return (
    <div>
      Count : {count}
    </div>
  )
}

const Increase = () => {
  
  const setCount = useSetRecoilState(counterAtom);
  
  function increase(){
    setCount((prevCount) => (prevCount + 2));
  }
  
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

const Decrease = () => {
  
  const setCount = useSetRecoilState(counterAtom);

  function decrease(){
    setCount((prevCount) => (prevCount - 1));
  }
  
  return (
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default App


// Unoptimal Way

// const Counter = () => {
  //   const [count, setCount] = useState(0);
  //   return (
    //     <div>
    //       <Increase setCount={setCount}/>
    //       <Decrease setCount={setCount}/>
    //       <CurrenCount count={count}/>
    //     </div>
    //   )
    // }

// const CurrenCount = ({count}) => {
//   return (
//     <div>
//       Count : {count}
//     </div>
//   )
// }

// const Increase = ({setCount}) => {
  
//   function increase(){
//     setCount((prevCount) => (prevCount + 1));
//   }

//   return (
//     <div>
//       <button onClick={increase}>Increase</button>
//     </div>
//   )
// }

// const Decrease = ({setCount}) => {
  
//   function decrease(){
//     setCount((prevCount) => (prevCount - 1));
//   }

//   return (
//     <div>
//       <button onClick={decrease}>Decrease</button>
//     </div>
//   )
// }

