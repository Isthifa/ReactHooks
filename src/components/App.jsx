import React,{useEffect,useState,useRef} from "react";

export default function App() {
  const [name,setName] = useState("");
  const count=useRef(0);

  const changeName=(e)=>{
    setName(e.target.value);
  }

  useEffect(()=>{
    count.current=count.current+1;
  });
  return (
    <div>
      <h1>App</h1>
      <input type="text" onChange={changeName}/>
      <h2>Name :{name}</h2>
      <h2>Renders :{count.current}</h2>
    </div>
  )
}