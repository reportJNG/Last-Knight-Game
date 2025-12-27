import styles from './Settings.module.css';
import { FiX, FiVolume2, FiMoon, FiSun } from 'react-icons/fi';
import { useContext } from 'react';
import { ThemeContext } from '../Components/ThemeProvider';

interface Settingsprops {
    close: () => void;
    saved: () => void;
}

export default function Settings({ close, saved }: Settingsprops) {
    const tcontext = useContext(ThemeContext);
    if (!tcontext) return null;
    const { theme, setTheme } = tcontext;

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={close}>
                    <FiX />
                </button>
                
                <div className={styles.header}>
                    <h2 className={styles.title}>Settings</h2>
                </div>
                
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>
                        <FiVolume2 /> Music Volume
                    </h3>
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        defaultValue="70"
                        className={styles.volumeSlider}
                    />      {/**here only need to add the music logic */}
                </div>
                
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>
                        {theme === 'light' ? <FiSun /> : <FiMoon />} Theme
                    </h3>
                    <div className={styles.themeButtons}>
                        <button 
                            onClick={() => setTheme('light')}
                            className={`${styles.themeButton} ${theme === 'light' ? styles.selected : ''}`}
                        >
                            Light
                        </button>
                        <button 
                            onClick={() => setTheme('dark')}
                            className={`${styles.themeButton} ${theme === 'dark' ? styles.selected : ''}`}
                        >
                            Dark
                        </button>
                    </div>
                </div>
                
                <div className={styles.actionButtons}>
                    <button className={styles.saveButton} onClick={saved}>
                        Save Settings
                    </button>
                    <button className={styles.closeModalButton} onClick={close}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}