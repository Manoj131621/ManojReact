import React,{useState} from 'react'

function HookCounterTwo() {
    const initialCount=0
    const [count,setCount] = useState(initialCount)
    const incrementFive =() =>{
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount+1)
        }
    }
  return (
    <div>
           Count : {count}
           <button onClick={() => setCount(initialCount)}>Reset</button>
           <button onClick={() => setCount(count+1)}>increment</button>
           <button onClick={() => setCount(prevCount=> prevCount-1)}>Decrement</button>
           <button onClick={incrementFive}>increment Five</button>
           {/* this decrement method we need to use for the hooks */}
    </div>
  )
}

export default HookCounterTwo