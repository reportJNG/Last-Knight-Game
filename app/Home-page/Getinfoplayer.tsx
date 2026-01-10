
import styles from './Getname.module.css';
import { useState, useEffect, useCallback } from 'react';
import { Player } from '../Types/Player';


interface GetInfoProps {
    Created: () => void;
    Quit: () => void;
    setPlayer: React.Dispatch<React.SetStateAction<Player>>;
    player: Player;
    clicked:()=>void;
}

// Define proper class stats type
interface ClassStatType {
    level: number;
    attack: number;
    health: number;
    speed: number;
}

// Define class stats with better balancing
const ENHANCED_CLASS_STATS: Record<string, ClassStatType> = {
    "Knight": { level: 5, attack: 85, health: 120, speed: 40 },
    "Sorcerer": { level: 5, attack: 70, health: 80, speed: 60 },
    "Handed": { level: 5, attack: 95, health: 100, speed: 50 },
    "Thief": { level: 5, attack: 75, health: 90, speed: 80 }
};

// Define starting items with bonuses
const ITEM_BONUSES: Record<string, Partial<ClassStatType>> = {
    "Weapon": { attack: 25 },
    "Book": { speed: 20 },
    "Key": { health: 50 },
    "Health": { health: 35 },
    "Speed Attack": { speed: 25 }
};

// Class descriptions for better UX
const CLASS_DESCRIPTIONS: Record<string, string> = {
    "Knight": "Heavy armor, great defense. Slow but powerful.",
    "Sorcerer": "Master of arcane arts. Low health, high versatility.",
    "Handed": "Two-handed specialist. Maximum damage output.",
    "Thief": "Swift and agile. Quick strikes and evasion."
};

export default function GetName({ Created, Quit, setPlayer,clicked }: GetInfoProps) {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [name, setName] = useState<string>('');
    const [selectedClass, setSelectedClass] = useState<string>('Knight');
    const [gender, setGender] = useState<string>('Male');
    const [selectedItem, setSelectedItem] = useState<string>('Key');
    
    const classes = ["Knight", "Sorcerer", "Handed", "Thief"];
    const items = ["Weapon", "Book", "Key", "Health", "Speed Attack"];
    const genders = ['Male', 'Female'];

    
 
    const goNext = () => {
        if (currentStep < 5) {
            clicked();
            setCurrentStep(prev => prev + 1);
        }
    };

    const goBack = () => {
        if (currentStep > 1) {
            clicked();
            setCurrentStep(prev => prev - 1);
        }
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                Quit();
            }
        };
        
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [Quit]);

    // Prevent scrolling on body
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const reset = () => {
        clicked();
        setCurrentStep(1);
        setName('');
        setSelectedClass('Knight');
        setGender('Male');
        setSelectedItem('Key');
    };

    const done = useCallback(() => {
        clicked();
        const baseStats = ENHANCED_CLASS_STATS[selectedClass];
        const itemBonus = ITEM_BONUSES[selectedItem] || {};
        
        const finalStats = {
            level: baseStats.level,
            attack: baseStats.attack + (itemBonus.attack || 0),
            health: baseStats.health + (itemBonus.health || 0),
            speed: baseStats.speed + (itemBonus.speed || 0)
        };
        
        setPlayer(prev => ({
            ...prev,
            name: name.trim(),
            class: selectedClass,
            gender: gender,
            rareitem: selectedItem,
            stats: finalStats,
        }));
        
        setTimeout(() => {
            Created();
        }, 500);
    }, [name, selectedClass, gender, selectedItem, setPlayer, Created]);

    // Auto-advance on valid input
    useEffect(() => {
        if (currentStep === 1 && name.length >= 3) {
            const timer = setTimeout(() => {
                // Small visual feedback before auto-advance
                const input = document.querySelector(`.${styles.nameInput}`);
                if (input) {
                    input.classList.add(styles.nameInput);
                }
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [name, currentStep]);

    // Get current stats for preview
    const getCurrentStats = () => {
        const baseStats = ENHANCED_CLASS_STATS[selectedClass];
        const itemBonus = ITEM_BONUSES[selectedItem] || {};
        
        return {
            level: baseStats.level,
            attack: baseStats.attack + (itemBonus.attack || 0),
            health: baseStats.health + (itemBonus.health || 0),
            speed: baseStats.speed + (itemBonus.speed || 0)
        };
    };

    const currentStats = getCurrentStats();
    
    return (
        <div className={styles.container}>
            {/* Background Atmospheric Elements */}
            <div className={styles.backgroundWrapper}>
                <div className={styles.stonePattern}></div>
                <div className={styles.fogLayer}></div>
                <div className={styles.embers}></div>
                <div className={styles.cathedralLight}></div>
            </div>

            {/* Main Container with Medieval Frame */}
            <div className={styles.medievalFrame}>
                <div className={styles.frameTop}></div>
                <div className={styles.frameLeft}></div>
                <div className={styles.frameRight}></div>
                <div className={styles.frameBottom}></div>
                
                
                <div className={styles.contentArea}>
                    {/* Step Progress Indicator */}
                    <div className={styles.progressContainer}>
                        <div className={styles.progressSteps}>
                            <div 
                                className={`${styles.stepIndicator} ${currentStep === 1 ? styles.activeStep : ''}`}
                                
                            >
                                <div className={styles.stepNumber}>I</div>
                                <div className={styles.stepLabel}>Name</div>
                            </div>
                            <div className={styles.stepConnector}></div>
                            <div 
                                className={`${styles.stepIndicator} ${currentStep === 2 ? styles.activeStep : ''}`}
                                
                            >
                                <div className={styles.stepNumber}>II</div>
                                <div className={styles.stepLabel}>Class</div>
                            </div>
                            <div className={styles.stepConnector}></div>
                            <div 
                                className={`${styles.stepIndicator} ${currentStep === 3 ? styles.activeStep : ''}`}
                                
                            >
                                <div className={styles.stepNumber}>III</div>
                                <div className={styles.stepLabel}>Form</div>
                            </div>
                            <div className={styles.stepConnector}></div>
                            <div 
                                className={`${styles.stepIndicator} ${currentStep === 4 ? styles.activeStep : ''}`}
                                
                            >
                                <div className={styles.stepNumber}>IV</div>
                                <div className={styles.stepLabel}>Gift</div>
                            </div>
                            <div className={styles.stepConnector}></div>
                            <div 
                                className={`${styles.stepIndicator} ${currentStep === 5 ? styles.activeStep : ''}`}
                                
                            >
                                <div className={styles.stepNumber}>V</div>
                                <div className={styles.stepLabel}>Ready</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.stepsContainer}>
                        {/* Step 1: Name Selection */}
                        {currentStep === 1 && (
                            <div className={styles.stepSection}>
                                <div className={styles.sectionHeader}>
                                    <h2 className={styles.sectionTitle}>
                                        WHAT IS THE NAME, UNKINDLED ONE?
                                    </h2>
                                    <p className={styles.sectionSubtitle}>A name that shall echo through the halls of Lordran</p>
                                </div>
                                
                                <div className={styles.inputSection}>
                                    <div className={styles.inputField}>
                                        <input
                                            type="text"
                                            name="Name"
                                            id="Name"
                                            required
                                            maxLength={20}
                                            minLength={3}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className={styles.nameInput}
                                            placeholder="Speak the name..."
                                            autoFocus
                                            autoComplete="off"
                                            spellCheck="false"
                                        />
                                        <div className={styles.inputDecorations}>
                                            <div className={styles.inputBorderTop}></div>
                                            <div className={styles.inputBorderBottom}></div>
                                            <div className={styles.inputGlow}></div>
                                        </div>
                                        <div className={styles.inputCounter}>
                                            {name.length}/20
                                            {name.length >= 3 && <span className={styles.validIndicator}> ✓</span>}
                                        </div>
                                    </div>
                                    
                                    <div className={styles.buttonGroup}>
                                        <button
                                            className={`${styles.primaryButton} ${name.length <= 2 ? styles.buttonDisabled : ''}`}
                                            disabled={name.length <= 2}
                                            onClick={goNext}
                                        >
                                            <span className={styles.buttonText}>CONTINUE</span>
                                            <span className={styles.buttonIcon}>➔</span>
                                        </button>
                                        <button
                                            className={styles.secondaryButton}
                                            onClick={Quit}
                                        >
                                            <span className={styles.buttonIcon}>✕</span>
                                            <span className={styles.buttonText}>ABANDON</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Class Selection */}
                        {currentStep === 2 && (
                            <div className={styles.stepSection}>
                                <div className={styles.sectionHeader}>
                                    <h2 className={styles.sectionTitle}>
                                        CHOOSE THE PATH
                                    </h2>
                                    <p className={styles.sectionSubtitle}>Each class carves a different fate in the annals of history</p>
                                </div>
                                
                                <div className={styles.classesGrid}>
                                    {classes.map((val, i) => (
                                        <div
                                            key={i}
                                            className={`${styles.classCard} ${selectedClass === val ? styles.classSelected : ''}`}
                                            onClick={() => { 
                                                setSelectedClass(val);
                                                // Auto-advance after selection
                                              
                                            }}
                                        >
                                            <div className={styles.classIcon}>
                                                {val === "Knight" && "🛡️"}
                                                {val === "Sorcerer" && "🔮"}
                                                {val === "Handed" && "⚔️"}
                                                {val === "Thief" && "🗡️"}
                                            </div>
                                            <h3 className={styles.className}>{val}</h3>
                                            <p className={styles.classDescription}>
                                                {CLASS_DESCRIPTIONS[val]}
                                            </p>
                                            <div className={styles.classStatsPreview}>
                                                <div className={styles.statPreview}>
                                                    <span>ATK</span>
                                                    <span>{ENHANCED_CLASS_STATS[val]?.attack || 0}</span>
                                                </div>
                                                <div className={styles.statPreview}>
                                                    <span>HP</span>
                                                    <span>{ENHANCED_CLASS_STATS[val]?.health || 0}</span>
                                                </div>
                                                <div className={styles.statPreview}>
                                                    <span>SPD</span>
                                                    <span>{ENHANCED_CLASS_STATS[val]?.speed || 0}</span>
                                                </div>
                                            </div>
                                            <div className={styles.classGlow}></div>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className={styles.buttonGroup}>
                                    <button
                                        className={styles.primaryButton}
                                        onClick={goNext}
                                    >
                                        <span className={styles.buttonText}>CONTINUE</span>
                                        <span className={styles.buttonIcon}>➔</span>
                                    </button>
                                    <button
                                        className={styles.secondaryButton}
                                        onClick={goBack}
                                    >
                                        <span className={styles.buttonIcon}>↶</span>
                                        <span className={styles.buttonText}>GO BACK</span>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Gender Selection */}
                        {currentStep === 3 && (
                            <div className={styles.stepSection}>
                                <div className={styles.sectionHeader}>
                                    <h2 className={styles.sectionTitle}>
                                        CHOOSE GENDER
                                    </h2>
                                    <p className={styles.sectionSubtitle}>The vessel that shall bear the flame</p>
                                </div>
                                
                                <div className={styles.genderSelection}>
                                    {genders.map((val, i) => (
                                        <div
                                            key={i}
                                            className={`${styles.genderCard} ${gender === val ? styles.genderSelected : ''}`}
                                            onClick={() => {
                                                setGender(val);
                                                
                                            }}
                                        >
                                            <div className={styles.genderIcon}>
                                                {val === 'Male' ? '👑' : '👸'}
                                            </div>
                                            <h3 className={styles.genderName}>{val}</h3>
                                            <div className={styles.genderModel}>
                                                <div className={`${styles.characterOutline} ${val.toLowerCase()}`}>
                                                    <div className={styles.characterHead}></div>
                                                    <div className={styles.characterBody}></div>
                                                    <div className={styles.characterBase}></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className={styles.buttonGroup}>
                                    <button
                                        className={styles.primaryButton}
                                        onClick={goNext}
                                    >
                                        <span className={styles.buttonText}>CONTINUE</span>
                                        <span className={styles.buttonIcon}>➔</span>
                                    </button>
                                    <button
                                        className={styles.secondaryButton}
                                        onClick={goBack}
                                    >
                                        <span className={styles.buttonIcon}>↶</span>
                                        <span className={styles.buttonText}>GO BACK</span>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Bonus Item Selection */}
                        {currentStep === 4 && (
                            <div className={styles.stepSection}>
                                <div className={styles.sectionHeader}>
                                    <h2 className={styles.sectionTitle}>
                                        CHOOSE YOUR GIFT
                                    </h2>
                                    <p className={styles.sectionSubtitle}>A gift to aid thee on the perilous journey ahead</p>
                                </div>
                                
                                <div className={styles.itemsGrid}>
                                    {items.map((val, i) => (
                                        <div
                                            key={i}
                                            className={`${styles.itemCard} ${selectedItem === val ? styles.itemSelected : ''}`}
                                            onClick={() => {
                                                setSelectedItem(val);
                                                
                                            }}
                                        >
                                            <div className={styles.itemIcon}>
                                                {val === "Weapon" }
                                                {val === "Book" }
                                                {val === "Key" }
                                                {val === "Health" }
                                                {val === "Speed Attack" }
                                            </div>
                                            <h4 className={styles.itemName}>{val}</h4>
                                            <div className={styles.itemRarity}>
                                                {val === "Key" ? "✦✦✦" : val === "Weapon" ? "✦✦" : "✦"}
                                            </div>
                                            <div className={styles.itemBonus}>
                                                {val === "Weapon" && "+25 ATK"}
                                                {val === "Book" && "+20 SPD"}
                                                {val === "Key" && "+50 HP"}
                                                {val === "Health" && "+35 HP"}
                                                {val === "Speed Attack" && "+25 SPD"}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className={styles.buttonGroup}>
                                    <button
                                        className={styles.primaryButton}
                                        onClick={goNext}
                                    >
                                        <span className={styles.buttonText}>REVIEW</span>
                                        <span className={styles.buttonIcon}>✧</span>
                                    </button>
                                    <button
                                        className={styles.secondaryButton}
                                        onClick={goBack}
                                    >
                                        <span className={styles.buttonIcon}>↶</span>
                                        <span className={styles.buttonText}>GO BACK</span>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 5: Final Review */}
                        {currentStep === 5 && (
                            <div className={styles.reviewSection}>
                                <div className={styles.reviewHeader}>
                                    <h2 className={styles.reviewTitle}>
                                         WRITE YOUR JOURNEY
                                    </h2>
                                    <p className={styles.reviewSubtitle}>All is prepared. The flame beckons...</p>
                                </div>
                                
                                <div className={styles.reviewContent}>
                                    {/* Character Summary */}
                                    <div className={styles.characterSummary}>
                                        <div className={styles.summaryHeader}>
                                            <h3 className={styles.summaryTitle}>UNLINKED ONE</h3>
                                            <div className={styles.summaryDivider}></div>
                                        </div>
                                        
                                        <div className={styles.summaryFields}>
                                            <div className={styles.summaryField}>
                                                <span className={styles.fieldLabel}>NAME</span>
                                                <div className={styles.fieldValue}>{name || "Unkindled"}</div>
                                            </div>
                                            <div className={styles.summaryField}>
                                                <span className={styles.fieldLabel}>CLASS</span>
                                                <div className={styles.fieldValue}>
                                                    <span className={styles.fieldIcon}>
                                                        {selectedClass === "Knight" }
                                                        {selectedClass === "Sorcerer" }
                                                        {selectedClass === "Handed" }
                                                        {selectedClass === "Thief" }
                                                    </span>
                                                    {selectedClass}
                                                </div>
                                            </div>
                                            <div className={styles.summaryField}>
                                                <span className={styles.fieldLabel}>GENDER</span>
                                                <div className={styles.fieldValue}>
                                                    
                                                    {gender}
                                                </div>
                                            </div>
                                            <div className={styles.summaryField}>
                                                <span className={styles.fieldLabel}>STARTING GIFT</span>
                                                <div className={styles.fieldValue}>
                                                    <span className={styles.fieldIcon}>
                                                        {selectedItem === "Weapon" }
                                                        {selectedItem === "Book" }
                                                        {selectedItem === "Key" }
                                                        {selectedItem === "Health" }
                                                        {selectedItem === "Speed Attack" }
                                                    </span>
                                                    {selectedItem}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className={styles.summaryActions}>
                                            <button className={styles.confirmButton} onClick={done}>
                                                <span className={styles.confirmText}>BEGIN JOURNEY</span>
                                                <div className={styles.confirmGlow}></div>
                                            </button>
                                            <button className={styles.resetButton} onClick={reset}>
                                                <span className={styles.resetIcon}>↺</span>
                                                <span className={styles.resetText}>START Over</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Character Visualization */}
                                    <div className={styles.characterVisual}>
                                        <div className={styles.characterStats}>
                                            <h3 className={styles.statsTitle}>ATTRIBUTES</h3>
                                            <div className={styles.statsGrid}>
                                                <div className={styles.statRow}>
                                                    <span className={styles.statName}>LEVEL</span>
                                                    <div className={styles.statBar}>
                                                        <div 
                                                            className={styles.statFill}
                                                            style={{ width: `${(currentStats.level / 100) * 100}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className={styles.statValue}>{currentStats.level}</span>
                                                </div>
                                                <div className={styles.statRow}>
                                                    <span className={styles.statName}>DAMAGE</span>
                                                    <div className={styles.statBar}>
                                                        <div 
                                                            className={styles.statFill}
                                                            style={{ width: `${(currentStats.attack / 100) * 100}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className={styles.statValue}>{currentStats.attack}</span>
                                                </div>
                                                <div className={styles.statRow}>
                                                    <span className={styles.statName}>HEALTH</span>
                                                    <div className={styles.statBar}>
                                                        <div 
                                                            className={styles.statFill}
                                                            style={{ width: `${(currentStats.health / 100) * 100}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className={styles.statValue}>{currentStats.health}</span>
                                                </div>
                                                <div className={styles.statRow}>
                                                    <span className={styles.statName}>ATTACK SPEED</span>
                                                    <div className={styles.statBar}>
                                                        <div 
                                                            className={styles.statFill}
                                                            style={{ width: `${(currentStats.speed / 100) * 100}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className={styles.statValue}>{currentStats.speed}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Exit Button */}
                <button className={styles.exitButton} onClick={Quit}>
                    <span className={styles.exitIcon}>✕</span>
                    <span className={styles.exitText}>ABANDON</span>
                </button>
            </div>

            {/* Ambient Elements */}
            <div className={styles.ambientParticles}></div>
            
            {/* Add floating embers effect */}
            <div className={styles.floatingEmbers}>
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={i}
                        className={styles.ember}
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: Math.random() * 0.5 + 0.2
                        }}
                    ></div>
                ))}
            </div>
        </div>
    )
}
