import Mainhandler from "../Game/Mainhandler";
import styles from './Levels.module.css';
import { useState } from "react";
import { Player } from "@/app/Types/Player";
import Starting from "./Starting";
import Ending from "./Ending";
import { BOSSES } from "@/app/Types/Boss";
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
P:Player;
//controll the xp leveling up
xp:number;
//here player will start new fight 
beginnew:()=>void;
stepshandler:()=>void;
}




export default function Levels({level,volume, setVolume, sound, setSound, leave,P,xp,beginnew}:Levelsprops){
    //3 steps
    const [steps,setSteps]=useState<number>(1);
    //combat stat indicator 
    const [combatstat,setCombatStat]=useState<number>(2); // 2 always mean that fight didnt start yet 0=win 1 =lose

    const stepshandler=()=>{//stepshaandler will go from step to another
        setSteps(prev=>prev+1);
    }
    return(
        
        <div className={styles.container}>
            {steps===1&&<Starting begin={stepshandler} leave={leave} bossname={BOSSES[level].name}/>}
            {steps===2&&<Mainhandler level={level}  volume={volume} setVolume={setVolume} sound={sound} setSound={setSound} leave={leave}P={P}xp={xp}setCombatStat={setCombatStat} stepshandler={stepshandler}/>}
            {steps===3&&<Ending level={level} bossname={BOSSES[level].name} beginnew={beginnew} setSteps={setSteps} combatstat={combatstat}/>}
        </div>

    )
}