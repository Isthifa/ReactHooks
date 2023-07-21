import React,{useReducer} from "react";


//use Reducer Hook in React JS 
//useReducer is a hook that is used for state management in React. It is an alternative to useState. So useState is built using useReducer.

export default function App() {
  const initialState = {count:0};

  const reducer=(state,action)=>{
    switch(action.type){
      case 'INCREMENT':
        return {count:state.count+1};
      case 'DECREMENT':
        return {count:state.count-1};
      default:
        return state;
    }
  }
  const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
      <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
    </div>
  )
}