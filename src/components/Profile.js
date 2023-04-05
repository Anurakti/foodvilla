import React, { useEffect } from "react";
import { useState } from "react";

const Profile = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("useEffect from setInterval")
        },1000)
        return ()=>{
            clearInterval(timer)
            console.log("clearInterval from return")
        }
    },[])
    return (
        <div>
            <h2>{count} </h2>
            <button onClick={()=>setCount(1)}>Increment</button>
        </div>
    )
}

export default Profile