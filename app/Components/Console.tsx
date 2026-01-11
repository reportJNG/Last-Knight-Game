import styles from './Console.module.css';

interface Consoleprops {
    text: string;
}

export default function Console({ text }: Consoleprops) {
    return (
        <div className={styles.container}>
            <div className={styles.boxconsole}>
                {/* Power indicator */}
                <div className={styles.powerIndicator}></div>
                
                {/* Status lights */}
                <div className={styles.statusLights}>
                    <div className={styles.statusLight}></div>
                    <div className={styles.statusLight}></div>
                    <div className={styles.statusLight}></div>
                </div>
                
                {/* Console text with prompt */}
                <span className={styles.textconsole}>
                    {`${text}`}
                </span>
            </div> 
        </div>
    );
}