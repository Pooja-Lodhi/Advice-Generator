import React, { useState } from "react";
import RandomAdviceLS from "./RandomAdviceLS";

function Advice(){
    const [advice,setAdvice]=useState("NA")
    return(
        <>
        <h1>Advice Generator</h1>  
        <RandomAdviceLS onSelectAdvice={setAdvice}></RandomAdviceLS>    
        <h2>{advice}</h2>
        <p>{advice}</p>
        </>
    )
}
export default Advice;