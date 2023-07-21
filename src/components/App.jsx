import React,{useState} from "react";

export default function App() {
    const array=useState(0);
    const count=array[0];
    const setCount=array[1];
    console.log(array);
    const increaseCounter=()=>{
        setCount(count+1);
    }
    const decreaseCounter=()=>{
        setCount(count-1);
    }

  return (
    <div>
      <h1>React Hooks</h1>
      <h1>Counter:{count}</h1>
    <button onClick={increaseCounter}>Increase</button>
    <button onClick={decreaseCounter}>Decrease</button>
    </div>
  );
}