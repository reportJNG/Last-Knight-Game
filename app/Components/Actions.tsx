import React from 'react';
import styles from './Action.module.css';

interface ActionsProps {
    turn: boolean;
    setTurn: React.Dispatch<React.SetStateAction<boolean>>;
    Attack: () => void;
    Dodge: () => void;
    Parry: () => void;
}

export default function Actions({ Attack, Dodge, Parry, turn, setTurn }: ActionsProps) {
    
    const handleAction = (action: () => void) => {
        action();
        setTurn(prev => !prev);
    };

    return (
        <div className={styles.container}>
            <div className={styles.buttonsContainer}>
                {/* Attack Button */}
                <div className={styles.buttonWrapper}>
                    <div className={`${styles.buttonGlow} ${turn ? styles.attackGlow : ''}`}></div>
                    <button 
                        className={`${styles.actionButton} ${styles.attackButton} ${turn ? styles.clickable : styles.unclickable}`}
                        onClick={() => handleAction(Attack)}
                        disabled={!turn}
                        aria-label="Attack"
                    >
                        <div className={styles.buttonInner}>
                            <i className="fi fi-bs-sword-alt"></i>
                            <span className={styles.buttonText}>ATTACK</span>
                            <div className={styles.buttonBorder}></div>
                            {turn && <div className={styles.hoverEffect}></div>}
                        </div>
                    </button>
                    <div className={styles.buttonLabel}>R1</div>
                </div>

                {/* Dodge Button */}
                <div className={styles.buttonWrapper}>
                    <div className={`${styles.buttonGlow} ${turn ? styles.dodgeGlow : ''}`}></div>
                    <button 
                        className={`${styles.actionButton} ${styles.dodgeButton} ${turn ? styles.clickable : styles.unclickable}`}
                        onClick={() => handleAction(Dodge)}
                        disabled={!turn}
                        aria-label="Dodge"
                    >
                        <div className={styles.buttonInner}>
                            <i className="fi fi-bs-user-fast-running"></i>
                            <span className={styles.buttonText}>DODGE</span>
                            <div className={styles.buttonBorder}></div>
                            {turn && <div className={styles.hoverEffect}></div>}
                        </div>
                    </button>
                    <div className={styles.buttonLabel}>R2</div>
                </div>

                {/* Parry Button */}
                <div className={styles.buttonWrapper}>
                    <div className={`${styles.buttonGlow} ${turn ? styles.parryGlow : ''}`}></div>
                    <button 
                        className={`${styles.actionButton} ${styles.parryButton} ${turn ? styles.clickable : styles.unclickable}`}
                        onClick={() => handleAction(Parry)}
                        disabled={!turn}
                        aria-label="Parry"
                    >
                        <div className={styles.buttonInner}>
                            <i className="fi fi-bs-shield"></i>
                            <span className={styles.buttonText}>PARRY</span>
                            <div className={styles.buttonBorder}></div>
                            {turn && <div className={styles.hoverEffect}></div>}
                        </div>
                    </button>
                    <div className={styles.buttonLabel}>L1</div>
                </div>
            </div>
            
            {/* Turn Indicator */}
            <div className={styles.turnIndicator}>
                <div className={styles.turnText}>
                    {turn ? 'YOUR TURN' : 'ENEMY TURN'}
                </div>
                <div className={`${styles.turnIcon} ${turn ? styles.active : styles.inactive}`}>
                    {turn ? '⚔️' : '💀'}
                </div>
            </div>
        </div>
    );
}