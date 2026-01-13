import { BOSSES } from '@/app/Types/Boss';
import styles from './Mainhandler.module.css';
import Title from '../Title';
import Pause from '../Pause';
import { useState } from 'react';
import Playerstats from '../Playerstats';
import Actions from '../Actions';
import { Player } from '@/app/Types/Player';
import { Bossurls } from '@/app/Types/Boss';
import Backpack from '../Backpack';
import Console from '../Console';
interface  Mainhandlerprops{
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
export default function Mainhandler({level,volume, setVolume, sound, setSound, leave,P,xp }:Mainhandlerprops){
    // Put player and boss in changable value
    const updatedplayerxp = {...P,stats:{...P.stats,
    level:P.stats.level+xp,attack:P.stats.attack+xp,speed:P.stats.speed+xp}}
    const [Player,setPlayer]=useState<Player>(updatedplayerxp);
    const [Boss,setBoss]=useState<Player>(BOSSES[level]);
    //title variables
    const [fightindicator,setFightinficator]=useState<boolean>(false);
    const [testwinner,setTesetwinner]=useState<string>('');
    
    
    
    
    //actions logic + variables
    const [turn,setTurn]=useState<boolean>(true); //always player hit first

    const attack = ()=>{

    }
    const doge=()=>{

    }
    const parry=()=>{

    }
    const healthplayerhanlder=async(health:number):Promise<boolean>=>{

        return false;
    }
    const healthplayerhanler=async(health:number):Promise<boolean>=>{

        return false;
    }


    //backpacklogic + variables
    const[quant,setQuant]=useState<number>(2); //each fight will have 2 potion to heal
    const heal=()=>{

    }
    //console text logic +vairables;
    const [consoletxt,setConsoletxt]=useState<string>('');
    const consoleupdater=()=>{

    }
    
    return(
        <div className={styles.container}>

            <div className={styles.header}>
                <div className={styles.midscreentop}><Title text={Boss.name} winornot={testwinner} endedfight={fightindicator}/></div>
                <div className={styles.righttopscrenn}><Pause volume={volume} setVolume={setVolume} sound={sound} setSound={setSound} leave={leave} /></div>
            </div>


            <div className={styles.body}>
                <div className={styles.leftsectionplayer}>
                <Playerstats Player={Player} picture='/avatar-player.jpg'/>
                </div>
                <div className={styles.btweensections}>
                <Actions turn={turn}  setTurn={setTurn} Attack={attack} Parry={parry} Dodge={doge} />
                </div>
                <div className={styles.rightsectionboss}>
                <Playerstats Player={Boss} picture={Bossurls[level]} />
                </div>
            </div>


            <div className={styles.about}>
                <div className={styles.leftdown}>
                <Backpack setQuant={setQuant} quant={quant} heal={heal}/>
                </div>
                 <div className={styles.rightdown}>
                <Console text={consoletxt}/>
                 </div>
            </div>
        </div>
    )

}