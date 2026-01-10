import styles from './Pause.module.css';
import {FiVolume2,FiVolume1} from 'react-icons/fi';
import React, { useState } from 'react';
interface Pauseprops{
    volume:number;
    setVolume:React.Dispatch<React.SetStateAction<number>>;
    sound:boolean;
    setSound:React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Pause({volume,setVolume,sound,setSound}:Pauseprops){
    const[overlay,setOvelay]=useState<boolean>(false);
    const [music,setMusic]=useState<boolean>(false);
    const toggle=()=>{
        setOvelay(prev=>!prev);
    }
    return(
        <div className={styles.container}>
        {!overlay&&<div className={styles.containerbtn}>
        <button className={styles.pausedbtn} onClick={toggle}><i className="fi fi-ss-pause"></i></button>
        </div>}
        {overlay&&<div className={styles.hiddenoverlay}>{/**this will take over the screen when it's on but allways is off */}
        <h2 className={styles.title}>Pause</h2>

        <div className={styles.sections}>
        <h3 className={styles.name}><FiVolume2/> Music Volume</h3>
          <input 
                        type="range" 
                        min="0" 
                        max="1" 
                        step={0.01}
                        defaultValue={volume}
                        onChange={(e)=>setVolume(Number(e.target.value))}
                        className={styles.volumeSlider}
                    />  
        </div>

        <div className={styles.sections}>
        <h3 className={styles.name}><FiVolume1/> Music</h3>
        <button className={`styles.${music?'On':'Off'}`} onClick={()=>setSound(true)}><i className="fi fi-ss-volume"></i></button>
        <button className={`styles.${!music?'On':'Off'}`} onClick={()=>setSound(false)}><i className="fi fi-sr-volume-mute"></i></button>
        </div>

        <div>

        </div>
        </div>}
        </div>
    )
}