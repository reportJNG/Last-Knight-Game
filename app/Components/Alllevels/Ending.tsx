import styles from './Ending.module.css'
import { useState } from "react";
interface Endingprops{
        level:number;
        bossname:string;
        beginnew:()=>void;
        stepshandler:()=>void;
    }
export default function Ending({level,bossname,beginnew,stepshandler}:Endingprops){

    return(
        <div className={styles.container}>




        </div>
    )
}