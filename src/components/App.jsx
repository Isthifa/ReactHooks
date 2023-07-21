import React,{createContext} from "react";
import MainComponent from "./MainComponent";

export const loginContext = createContext();
export default function App() {

  return (
    <loginContext.Provider value={true}>
    <div>
      <MainComponent/>
    </div>
    </loginContext.Provider>
  )

}