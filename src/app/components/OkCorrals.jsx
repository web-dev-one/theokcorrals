'use client';
import useSound from "use-sound";
import { useEffect } from "react";


export default function OkCorrals(){
    const [playYeeHaa] = useSound('/yee-haw.mp3');

    useEffect(()=>{
        playYeeHaa();
      },[playYeeHaa])
    
    return(<>
            <h1>OK</h1>
           </>)
}