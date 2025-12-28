import styles from './Getname.module.css';
import { useState } from 'react';
import { Player } from '../Types/Player';

export default function Getname(){
const [step1,setStep1]=useState<boolean>(true);
const [step2,setStep2]=useState<boolean>(false);
const [step3,setStep3]=useState<boolean>(false);
const[step4,setStep4]=useState<boolean>(false);
const [name,setName]=useState<string>('');
const [classs,setClasss]=useState<string>('Knight');
const [gender,setGender]=useState<string>('Male');
const Classes:string[] = ["Knight", "Sorcerer", "Handed", "Thief"];
const rareitem:string[]=["Wepon","Book","Key","Attack Power","Health","Speed Attack"];
const [Plyer,setPlayer]=useState<Player|null>(null);
const Typec:string[]=['Male','Female'];

const reset =()=>{
    setStep4(false);
    setName('');
    setClasss('Knight');
    setGender('Male');
    setStep1(true);
}
const done=()=>{
    setStep4(false);
}
    return(
        <div className={styles.container}>
            {step1&&<div className={styles.step1}><h2 className={styles.text}>Choose Name</h2><input type="text" name="Name" id="Name" required maxLength={20} minLength={3} value={name} onChange={(e)=>setName(e.target.value)} className={styles.inputeditable}/>
            <button className={styles.btn} disabled={name.length<=2} onClick={()=>{setStep1(false);setStep2(true)}}>Submit</button></div>} {/**here this step one should be looking like goodd in gaming way how is that big input squared styles.step1 need to be looking centered input with good looking inspeare theme from dark souls and under it button centred  */}
            {
            step2&&
            <div className={styles.step1}>
                <input type="text" name='Name' id='Name'  value={name} disabled readOnly className={styles.noteditable}/> 
                <div className={styles.main}>
                    <h2 className={styles.text}>Choose Class</h2>
                   {Classes.map((val,i)=> <button key={i} onClick={()=>{setClasss(val)}} className={styles.buttonchoose}>{val}</button> )}
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
                                        <h2 className={styles.text}>Choose Gender</h2>

                {Typec.map((val,i)=>(
                    <button className={styles.buttontype} key={i} onClick={()=>setGender(val)}>{val}</button>
                ))}
                <button className={styles.genderbtn} onClick={()=>{setStep3(false);setStep4(true)}}>Submit</button>
                </div>
            </div>
        }{/** this is super good we put same logic mid screen the to bit right the inputs such good looking and switch animation btween steps */}
        {
            step4&& 
            <div className={styles.step4}>
                <input type="text" name='Name' id='Name'  value={name} disabled readOnly className={styles.noteditable}/> 
                <input type="text" name='Class' id='Class'  value={classs} disabled readOnly className={styles.noteditable}/> 
                <input type="text" name='Gender' id='Gender'  value={gender} disabled readOnly className={styles.noteditable}/> 
            <div className={styles.main}>
            <h2 className={styles.text}>Are You sure?</h2>
            <button className={styles.yesbutton} onClick={done}>Yes</button>
            <button className={styles.resetbutton} onClick={reset}>Rest Stats</button>
            </div>
            </div>
            
        }
        </div>
    )
}