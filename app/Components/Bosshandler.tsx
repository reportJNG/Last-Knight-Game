import { useEffect, useState } from 'react';
import styles from './Bosshandler.module.css';

interface BosshandlerProps {
    text: string;
    winornot: string; 
    endedfight: boolean;
}

export default function Bosshandler({ text, winornot, endedfight }: BosshandlerProps) {
    const [showTitle, setShowTitle] = useState(false);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        // Show boss title after mount
        const titleTimer = setTimeout(() => {
            setShowTitle(true);
        }, 300);

        return () => clearTimeout(titleTimer);
    }, []);

    useEffect(() => {
        if (endedfight) {
            // Show result message after fight ends
            const resultTimer = setTimeout(() => {
                setShowResult(true);
            }, 10000);

            return () => clearTimeout(resultTimer);
        }
    }, [endedfight]);

    return (
        <div className={styles.container}>
            {/* Boss Title */}
            <div className={`${styles.bossTitle} ${showTitle ? styles.show : ''}`}>
                <h1 className={styles.bigtitle}>{text}</h1>
            </div>

            {/* Victory/Defeat Message */}
            {endedfight && showResult && (
                <div className={`${styles.resultMessage} ${winornot === 'win' ? styles.victory : styles.defeat}`}>
                    <h2>{winornot === 'win' ? 'VICTORY ACHIEVED' : 'YOU DIED'}</h2>
                </div>
            )}
        </div>
    );
}