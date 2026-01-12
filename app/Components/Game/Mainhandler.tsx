interface  Mainhandlerprops{

}
import { BOSSES } from '@/app/Types/Boss';
import styles from './Mainhandler.module.css';
import Title from '../Title';
import Pause from '../Pause';
import { useState } from 'react';
export default function Mainhandler(){
    //title values
    const [fightindicator,setFightinficator]=useState<boolean>(false);
    const [testwinner,setTesetwinner]=useState<string>('');
    const [bossname,setBossname]=useState<string>('');
    return(
        <div className={styles.container}>

            <div className={styles.header}>
            <Title text={bossname} winornot={testwinner} endedfight={fightindicator}/>
            </div>


            <div className={styles.body}>

            </div>


            <div className={styles.about}>

            </div>
        </div>
    )

}