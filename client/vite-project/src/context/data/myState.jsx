import { useEffect, useState } from "react";
import myContext from "./myContext";

const myState=({children})=>{
   
    const[mode,setMode]=useState('dark')
    const toggleMode=()=>{
        if(mode==='light'){
            setMode('dark');
            document.body.style.backgroundColor='rgb(17,24,39)'
        }
        else{
            setMode('light');
            document.body.style.backgroundColor='white'
        }
    }
   
    return(
        <myContext.Provider value={{toggleMode,mode}}>
            {children}
        </myContext.Provider>
    )
}

export default myState;
