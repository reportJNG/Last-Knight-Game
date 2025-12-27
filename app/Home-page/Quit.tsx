import styles from './Quit.module.css';
import { FiX, FiAlertTriangle } from 'react-icons/fi';

interface Quitprops {
  yes: () => void;
  no: () => void;
}

export default function Quit({ yes, no }: Quitprops) {
  return (
    <>
      <div className={styles.backdrop} onClick={no}></div>
      
      <div className={styles.container}>
        <div className={styles.warningIcon}>
          <FiAlertTriangle />
        </div>
        
        <button className={styles.buttonclose} onClick={no} aria-label="Close">
          <FiX />
        </button>
        
        <h3 className={styles.text}>
          Are You Sure You Want To Quit?
        </h3>
        
        <p className={styles.subtext}>
          All unsaved progress will be lost. This action cannot be undone.
        </p>
        
        <div className={styles.buttonGroup}>
          <button className={styles.buttonyes} onClick={yes}>
            Yes, Quit
          </button>
          <button className={styles.buttono} onClick={no}>
            No, Continue
          </button>
        </div>
      </div>
    </>
  );
}