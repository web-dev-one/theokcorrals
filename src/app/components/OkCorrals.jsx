'use client';
import useSound from "use-sound";
import { useEffect } from "react";
import '../global.scss'
import '../../pages/styles/index.scss'


export default function OkCorrals(){
    const [playYeeHaa] = useSound('/yee-haw.mp3');

    useEffect(()=>{
        playYeeHaa();
      },[playYeeHaa])
    const number = '(520)730-7020'
    return(<>
            <div className="d-flex flex-column corrals">
            <h1 className="yellow mx-auto">OK Corrals Barn & Shade</h1>
            <h3 className="yellow mx-auto">Arizona Horse Shade</h3>
            <h3 className="yellow mx-auto">Mare Motels & Shed Rows</h3>
            <h1 className="yellow mx-auto">Barns</h1>
            <br/>
            <h1 className="mx-auto">Call {number}</h1>
            <h1 className="mx-auto">Installed in Arizona</h1>
            </div>
           </>)
}