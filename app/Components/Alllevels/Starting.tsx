import styles from './Starting.module.css'

interface Startingprops{
    begin:()=>void;
    bossname:string;
    leave:()=>void;
}

export default function Starting({begin,bossname,leave}:Startingprops){


    return(
        <div className={styles.container}>

        </div>
    )
}