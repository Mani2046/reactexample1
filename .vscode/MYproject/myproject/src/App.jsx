import { useState } from "react";

export default function App(){
    const[count,setCount]=useState(0);
    return(
        <div>
       <center>{count}</center>
<button onClick={()=>setCount(count+1)}>Increment</button>
<button onClick={()=>setCount(count-1)}>Decrement</button>
<button onClick={()=>setCount(0)}>Reset</button>
<button onClick={()=>setCount(count*2)}>Double</button>
        </div>
    )
}