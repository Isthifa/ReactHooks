import React,{useContext} from 'react'
import {loginContext} from "./App";

export default function SinglePost() {
    const login = useContext(loginContext);
    console.log(login);
    return (
        <div>
            <h1>Single Post</h1>
        </div>
    )
}
