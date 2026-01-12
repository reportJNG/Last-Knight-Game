import { BOSSES } from '@/app/Types/Boss';
import styles from './Mainhandler.module.css';
import Title from '../Title';
import Pause from '../Pause';
import { useState } from 'react';
import Playerstats from '../Playerstats';
import Actions from '../Actions';
import { Player } from '@/app/Types/Player';
import { Bossurls } from '@/app/Types/Boss';
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
Player:Player
Boss:Player
}
export default function Mainhandler({level,volume, setVolume, sound, setSound, leave,Player,Boss }:Mainhandlerprops){
    //title values
    const [fightindicator,setFightinficator]=useState<boolean>(false);
    const [testwinner,setTesetwinner]=useState<string>('');
    //pause values 

    return(
        <div className={styles.container}>

            <div className={styles.header}>
                <div className={styles.midscreentop}><Title text={BOSSES[level].name} winornot={testwinner} endedfight={fightindicator}/></div>
                <div className={styles.righttopscrenn}><Pause volume={volume} setVolume={setVolume} sound={sound} setSound={setSound} leave={leave} /></div>
            </div>


            <div className={styles.body}>
                <div className={styles.leftsectionplayer}>
                <Playerstats Player={Player} picture='/avatar-player.jpg'/>
                </div>
                <div className={styles.btweensections}>
                <Actions/>
                </div>
                <div className={styles.rightsectionboss}>
                <Playerstats Player={Boss} picture={Bossurls[level]} />
                </div>
            </div>


            <div className={styles.about}>

            </div>
        </div>
    )

}