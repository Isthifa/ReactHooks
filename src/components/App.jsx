import React,{useState,useEffect} from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `You clicked ${count} times`;
  })
  return (
    <div>
      <h1>{count} New Messages!</h1>
      <button onClick={() => setCount(count + 1)}>count</button>
    </div>
  );
}
