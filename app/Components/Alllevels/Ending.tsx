import styles from './Ending.module.css'

interface Endingprops{
        level:number;
        bossname:string;
        beginnew:()=>void;
        setSteps:React.Dispatch<React.SetStateAction<number>>;
        combatstat:number;
    }
export default function Ending({level,bossname,beginnew,setSteps,combatstat}:Endingprops){
    const goodTexts: string[] = [
    "You fought well. The boss never stood a chance.",
    "Victory is yours. That was a clean kill.",
    "Well done! You defeated the boss with pure skill.",
    "Impressive fight. The boss has fallen.",
    "Nice one! You crushed the boss like a legend."];

    const badTexts: string[] = [
    "You fought bravely, but the boss was stronger.",
    "Defeat… the boss proved too powerful this time.",
    "So close! The boss barely survived and finished you.",
    "You were not ready. The boss shows no mercy.",
    "The boss wins. Train harder and try again."
    ];
    const Handler = () =>{
    setSteps(1); //reset the steps
    setTimeout(() => {
        beginnew(); //start new journey fight
    }, 4000);
    }
    return(
        <div className={styles.container}>
        {level!==4&&
        <div className={styles.normalboss}>
            <div className={styles.bosstitle}>{combatstat===0?`You Killed ${bossname}`:`You Died To ${bossname}`}
            <p className={styles.description}>
            {combatstat===0?goodTexts[level]:badTexts[level]}
            </p>   
            </div>
            <button className={styles.btn} onClick={Handler}>Explore</button>
        </div>}
        {level===4&&
        <div className={styles.finalboss}>
        <div className={styles.normalboss}>
            <div className={styles.bosstitle}>{combatstat===0?`You Killed ${bossname}`:`You Died To ${bossname}`}
            <p className={styles.description}>
            {combatstat===0?goodTexts[level]:badTexts[level]}
            </p>   
            </div>
            <button className={styles.btn} onClick={Handler}>Explore</button>
        </div>
        </div>}</div>)}