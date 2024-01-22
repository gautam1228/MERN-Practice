import { RecoilRoot, useRecoilValue, useSetRecoilState} from "recoil";
import { countAtom } from "./store/atoms/Count";

function App() {
  console.log("App re-render")
  return (
    <div>
      <RecoilRoot>
        <CountRenderer/>
        <Buttons />
        <EvenChecker/>
      </RecoilRoot>
    </div>
  )

}

function CountRenderer(){
  console.log("CountRenderer re-rendered");
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons(){
  console.log("Buttons re-rendered");
  const setCount = useSetRecoilState(countAtom);
  
  return <div>
    
    <button onClick={()=>{
      setCount(count => count + 1);
    }}>
      Increase
    </button>

    <button onClick={()=>{
      setCount(count => count - 1);
    }}>
      Decrease
    </button>
  </div>
}

function EvenChecker(){
  
  console.log("EvenChecker re-rendered");
  const count = useRecoilValue(countAtom);

  if(count % 2 == 0 ){
    return <div>
      It is even
    </div>
  }

}

export default App