import React,{useState,useEffect} from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
//useEffect is a hook that allows you to perform side effects in function components
//it is a close replacement for componentDidMount,componentDidUpdate and componentWillUnmount
//useEffect runs after every render of the component
//useEffect takes a callback function as an argument
  useEffect(()=>{
    document.title = `You clicked ${otherCount} times`;
  },[otherCount])
  return (
    <div>
      <h1>{count} New Messages!</h1>
      <button onClick={() => setCount(count + 1)}>count</button>
      <h1>{otherCount} New Messages!</h1>
      <button onClick={() => setOtherCount(otherCount + 5)}>otherCount</button>
    </div>
  );
}
