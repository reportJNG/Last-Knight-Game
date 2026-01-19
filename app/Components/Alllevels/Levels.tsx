import Mainhandler from "../Game/Mainhandler";
import styles from './Levels.module.css';
import { useState } from "react";
import { Player } from "@/app/Types/Player";
import Starting from "./Starting";
import Ending from "./Ending";
interface  Levelsprops{
//indicator
level:number;
//pause
volume: number;
setVolume: React.Dispatch<React.SetStateAction<number>>;
sound: boolean;
setSound: React.Dispatch<React.SetStateAction<boolean>>;
leave: () => void;
//fight stats boss and player
P:Player
//controll the xp leveling up
xp:number
}




export default function Levels({level,volume, setVolume, sound, setSound, leave,P,xp}:Levelsprops){
    //3 steps
    const [step1,setStep1]=useState<boolean>(true);
    const [step2,setStep2]=useState<boolean>(false);
    const [step3,setStep3]=useState<boolean>(false);
    //combat stat indicator 
    const [combatstat,setCombatStat]=useState<number>(2); // 2 always mean that fight didnt start yet

    const stepshandler=()=>{//stepshaandler will go from step to another

    }
    return(
        
        <div className={styles.container}>
            {step1&&<Starting/>}
            {step2&&<Mainhandler level={level}  volume={volume} setVolume={setVolume} sound={sound} setSound={setSound} leave={leave}P={P}xp={xp}setCombatStat={setCombatStat}/>}
            {step3&&<Ending/>}
        </div>

    )
}