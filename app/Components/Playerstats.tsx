import styles from './Playerstats.module.css';
import Image from 'next/image';
import { Player } from '../Types/Player';
interface Playerstatsprops{
Player:Player;
picture:string;
}
export default function Playerstats({Player,picture}:Playerstatsprops){

    return(
        <div className={styles.container}>
            <div className={styles.imagehandler}>
                <Image alt='Player Image' src={picture} className={styles.img} loading='lazy'/>
            </div>
            <div className={styles.boxhandler}>
                <h4 className={styles.text}><strong>{Player.name}</strong></h4>
                <h4 className={styles.text}><strong>{Player.class}</strong></h4>
                <h4 className={styles.text}><strong>{Player.gender}</strong></h4>
                <h4 className={styles.text}><strong>{Player.rareitem}</strong></h4>
                   <div className={styles.statshandler}>
                    <div className={styles.eachbox}>
                        <span className={styles.statname}>Level</span>
                        <div className={styles.theme}>
                    
                        <span className={styles.value}>{Player.stats.level}</span>
                        </div>
                    </div>
                

                   
                    <div className={styles.eachbox}>
                        <span className={styles.statname}>Attack</span>
                        <div className={styles.theme}>
                    
                        <span className={styles.value}>{Player.stats.attack}</span>
                        </div>
                    </div>
                

                   
                    <div className={styles.eachbox}>
                        <span className={styles.statname}>Speed</span>
                        <div className={styles.theme}>
                    
                        <span className={styles.value}>{Player.stats.speed}</span>
                        </div>
                    </div>
                </div>

            <div className={styles.healthhandler}>                 
            <div className={styles.statRow}>
            <span className={styles.statName}>HEALTH</span>
            <div className={styles.statBar}>
            <div 
            className={styles.statFill}
            style={{ width: `${(Player.stats.health/ 100) * 100}%` }}></div>
            </div>
            <span className={styles.statValue}>{Player.stats.health}</span>
            </div>
            </div>

            </div>
        </div>
    )
}