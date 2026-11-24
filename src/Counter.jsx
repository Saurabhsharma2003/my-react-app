// import { useState } from "react";

// function Counter(){
//   const [Count , setCount]=
// useState(0);
// return(
//   <>
//   <h1>{Count}</h1>
//   <button onClick={()=>setCount(Count+1)}>Increase</button>
//   </>
// )
// }
// export default Counter;












import { useState } from "react";
function Counter(){
  const[count , setCount]=
  useState(0);
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+10)}>+
      </button>
      <button onClick={()=>setCount(count-10)}>-</button>
      <button onClick={()=>setCount(count*2000)}>*</button>
      <button onClick={()=>setCount(count/2.5)}>%</button>
      <button onClick={()=>setCount(0)}>reset</button>
    </div>
  )
}
export default Counter;

