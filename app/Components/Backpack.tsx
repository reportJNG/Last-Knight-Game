import { useState } from 'react';
import styles from './Backpack.module.css';

export default function Backpack(){
    const [toggling,setToggling]=useState<boolean>(false);
    const toggle =()=>{
        setToggling(prev=>!prev);
    }
    return(
        <div className={styles.container}>
            {!toggling&&<div className={styles.backback}>
                        <button className={styles.backpackbtn} onClick={toggle}></button>
            </div>}
            {
            toggling&&<div className={styles.backpackedoverlayed}> {/**this is should me like overlaeyd packpacked that will show items that player can use if click it will tell him if he is sure abt using that item he will have items like potion */}
                
            </div>
            }
        </div>
    )
}