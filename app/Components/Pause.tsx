import styles from './Pause.module.css';
import { FiVolume2, FiVolume1 } from 'react-icons/fi';
import React, { useState } from 'react';
import Quit from '../Home-page/Quit';

interface Pauseprops {
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  sound: boolean;
  setSound: React.Dispatch<React.SetStateAction<boolean>>;
  leave: () => void;
}

export default function Pause({ volume, setVolume, sound, setSound, leave }: Pauseprops) {
  const [overlay, setOverlay] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const toggle = () => {
    setOverlay(prev => !prev);
  };

  return (
    <div className={styles.container}>
      {!confirm && (
        <>
          {/* Pause Button - Always top right */}
          {!overlay && (
            <div className={styles.containerbtn}>
              <button className={styles.pausedbtn} onClick={toggle}>
                <i className="fi fi-ss-pause"></i>
              </button>
            </div>
          )}
          
          {/* Pause Menu Overlay */}
          {overlay && (
            <div className={styles.hiddenoverlay}>
              <h2 className={styles.title}>Paused</h2>
              
              {/* Resume Button Section */}
              <div className={styles.sections}>
                <button className={styles.buttonresume} onClick={toggle}>
                  Resume Game
                </button>
              </div>
              
              {/* Volume Control Section */}
              <div className={styles.sections}>
                <h3 className={styles.name}>
                  <FiVolume2 /> Music Volume
                </h3>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step={0.01}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className={styles.volumeSlider}
                />
                <div className={styles.musicToggle}>
                  <button
                    className={`${styles.toggleButton} ${sound ? styles.active : ''}`}
                    onClick={() => setSound(true)}
                  >
                    <i className="fi fi-ss-volume"></i> On
                  </button>
                  <button
                    className={`${styles.toggleButton} ${!sound ? styles.active : ''}`}
                    onClick={() => setSound(false)}
                  >
                    <i className="fi fi-sr-volume-mute"></i> Off
                  </button>
                </div>
              </div>
              
              {/* Exit Button Section */}
              <div className={styles.sections}>
                <button className={styles.existbtn} onClick={() => setConfirm(true)}>
                  Exit Realm
                </button>
              </div>
            </div>
          )}
        </>
      )}
      
      {/* Confirmation Overlay */}
      {confirm && (
        <div className={styles.overlay}>
          <Quit yes={leave} no={() => setConfirm(false)} />
        </div>
      )}
    </div>
  );
}