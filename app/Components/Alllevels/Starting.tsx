import styles from './Starting.module.css'
import { useState } from 'react';
import { FiX } from 'react-icons/fi';
interface Startingprops{
    begin:()=>void;
    bossname:string;
    leave:()=>void;
}

export default function Starting({begin,bossname,leave}:Startingprops){
    const [confirme ,setConfirme]=useState<boolean>(false)
    return(
        <div className={styles.container}> {/**here need to choose nice uibackground for it */}
        {!confirme&&<div className={styles.firstpage}><div className={styles.midscreentitle}>
                <h1 className={styles.nameboss}>{bossname}</h1>
        </div>
        <div className={styles.buttonhandlerdownmid}>
        <button className={styles.leave} onClick={()=>setConfirme(prev=>!prev)}>Leave</button>
        <button className={styles.fight} onClick={begin}>Fight !</button>
        </div></div>}{/**first page is fight or leave */}
        
        {confirme && (
         <div className={styles.secondpage}>
         <button className={styles.closetopright} onClick={() => setConfirme(prev=>!prev)}>
              <FiX />
            </button>
    
          <div className={styles.confirmContent}>
          <h3 className={styles.text}>Are you sure you want to leave?</h3>
          <p className={styles.description}>
          <strong>All character progress will be lost permanently.</strong> 
          <br />
          This action cannot be undone.
          </p>      
         <div className={styles.buttonContainer}>
         <button 
          className={styles.cancelButton}
          onClick={() => setConfirme(prev=>!prev)}
            >
          Cancel
          </button>
          <button 
          className={styles.confirmButton}
          onClick={leave}
          >
           Leave
        </button></div></div></div>)}{/**second page to confirme leaving */}</div>)}