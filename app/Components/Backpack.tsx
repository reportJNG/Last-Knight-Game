import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import styles from './Backpack.module.css';

interface Backpackprops {
  setQuant: React.Dispatch<React.SetStateAction<number>>;
  quant: number;
  heal: () => void;
}

export default function Backpack({ quant, setQuant, heal }: Backpackprops) {
  const [toggling, setToggling] = useState<boolean>(false);
  
  const toggle = () => {
    setToggling(prev => !prev);
  }
  
  const used = () => {
    if (quant <= 0) return;
    setQuant(prev => prev - 1);
    heal();
  }
  
  return (
    <div className={styles.container}>
      {!toggling && (
        <div className={styles.backback}>
          <button 
            className={styles.backpackbtn} 
            onClick={toggle}
            aria-label="Open backpack"
          >
            <i className="fi fi-rr-backpack"></i>
          </button>
        </div>
      )}
      
      {toggling && (
        <div className={styles.backpackedoverlayed}>
          <div 
            className={styles.X} 
            onClick={toggle}
            aria-label="Close backpack"
            role="button"
            tabIndex={0}
          >
            <FiX />
          </div>
          
          <div className={styles.potionshandler}>
            <div className={styles.potionui}>
              <i className="fi fi-rr-flask-potion"></i>
              <span className={styles.numberpotions}>
                {quant}
              </span>
            </div>
            
            <div className={styles.usebtn}>
              <button 
                className={styles.btnclick}
                onClick={used}
                disabled={quant <= 0}
              >
                {quant > 0 ? 'Use Potion' : 'No Potions Left'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}