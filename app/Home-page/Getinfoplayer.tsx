import styles from './Getname.module.css';
import { useState } from 'react';


export default function Getname(){
const [step1,setStep1]=useState<boolean>(true);
const [step2,setStep2]=useState<boolean>(false);
const [step3,setStep3]=useState<boolean>(false);
const [name,setName]=useState<string>('');
const [classs,setClasss]=useState<string>('Knight');
const Classes:string[] = ["Knight", "Sorcerer", "Handed", "Thief"];
const Typec:string[]=['Male','Female'];


    return(
        <div className={styles.container}>
            {step1&&<div className={styles.step1}><input type="text" name="Name" id="Name" required maxLength={20} minLength={3} value={name} onChange={(e)=>setName(e.target.value)} className={styles.inputeditable}/>
            <button className={styles.btn} disabled={name.length<=2} onClick={()=>{setStep1(false);setStep2(true)}}>Submit</button></div>} {/**here this step one should be looking like goodd in gaming way how is that big input squared styles.step1 need to be looking centered input with good looking inspeare theme from dark souls and under it button centred  */}
            {
            step2&&
            <div className={styles.step1}>
                <input type="text" name='Name' id='Name'  value={name} disabled readOnly className={styles.noteditable}/> 
                <div className={styles.main}>
                    <select name="class" id="class" onChange={(e)=>setClasss(e.target.value)} value={classs}>
                    {Classes.map((val,i)=> <option value="class" key={i}>{val}</option> )}
                    </select>
                    <button className={styles.classbtn} onClick={()=>{setStep2(false);setStep3(true)}}>Submit</button>
                </div>
            </div>
            }{/**the input should be in top  bit left to screen still with the game dark looking + the calsses should be nice good looking  first will class then he choose class   button same such pure good looking nice sstyle nice theme and fonts all text should be nice*/}
        {
            step3&&
            <div className={styles.step3}>
                <input type="text" name='Name' id='Name'  value={name} disabled readOnly className={styles.noteditable}/> 
                <input type="text" name='Class' id='Class'  value={classs} disabled readOnly className={styles.noteditable}/> 
                <div className={styles.main}>
                {Typec.map((val,i)=>(
                    <button className={styles.buttontype} key={i}>{val}</button>
                ))}
                </div>
            </div>
        }
        </div>
    )
}