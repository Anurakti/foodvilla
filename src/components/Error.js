import React from "react";
import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError()
    console.log(err)
    const {status, statusText} = err
    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
           <h2>{status + " : " + statusText} </h2> 
        </div>
    )
}

export default Error;