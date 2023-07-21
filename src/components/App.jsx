import React,{useState} from "react";

export default function App() {
   const [details,setDetails]=useState({name:"",counter:0})


   const handleChange=(e)=>{
      setDetails((prev)=>({
        ...prev,
        name:e.target.value,
      }));
    }
    const decrement=()=>{
      setDetails((prev)=>({
        ...prev,
        counter:prev.counter-1,
      }));
    }

   const increment=()=>{
      setDetails((prev)=>({
        ...prev,
        counter:prev.counter+1,
      }));
    }
  return (
    <div>
      <h1>React Hooks</h1>
      <input type="text" onChange={handleChange}></input>
      <h1>{details.name} Counter:{details.counter}</h1>
        <button onClick={increment}>Increment</button> {/*<!-setCount is a function which is used to update the value of count>*/}
        <button onClick={decrement}>Decrement</button>
    </div>
  );
}