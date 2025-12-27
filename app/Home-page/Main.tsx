'use client'
import Howtoplay from './Howtoplay';
import styles from './Main.module.css';
import {  useRef, useState } from 'react';
import Settings from './Settings';
import Quit from './Quit';
import Message from '../Components/Message';

export default function Main() {
  const [Sound, setSound] = useState<boolean>(false);
  const [howtoplay, setHowtoplay] = useState<boolean>(false);
  const [Setting, setSetting] = useState<boolean>(false);
  const [quit, setQuit] = useState<boolean>(false);
  const [goodtxt, setGoodtxt] = useState<boolean>(false);
  
  const savedhandler = () => {
    setSetting(false);
    setGoodtxt(true);
    const time = setTimeout(() => {
      setGoodtxt(false);
    }, 5000);
    return () => clearTimeout(time);
  }
  
  const audioRef = useRef<HTMLAudioElement>(null);


  
  const toggleaudio = () => {
    if (audioRef.current) {
      if (Sound) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setSound(prev => !prev);
  }

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <button 
          className={styles.soundbtn} 
          onClick={toggleaudio} 
          aria-label={Sound ? "Mute audio" : "Unmute audio"}
        >
          {Sound ? "🔊" : "🔇"}
        </button>
        <h1 className={styles.gamename}>The Last Knight</h1>
      </div>
      
      <div className={styles.main}>
        <button className={styles.bigbuttonevents}>
          <i className="fi fi-sr-two-swords"></i>Begin Quest
        </button>
        <button 
          className={styles.bigbuttonevents} 
          onClick={() => setHowtoplay(true)}
        >
          <i className="fi fi-bs-book-alt"></i> How To Play
        </button>
        <button 
          className={styles.bigbuttonevents} 
          onClick={() => setSetting(true)}
        >
          <i className="fi fi-bs-gears"></i> Settings
        </button>
        <button className={styles.bigbuttonevents} onClick={() => window.open('https://remalihamza.vercel.app/','_blank')}>
          <i className="fi fi-ss-user-crown"></i> Visit Kingdom
        </button>
        <button 
          className={styles.bigbuttonevents} 
          onClick={() => setQuit(true)}
        >
          <i className="fi fi-sr-entrance"></i>Exit Realm
        </button>
      </div>
      
      {howtoplay && (
        <div className={styles.modalOverlay}>
          <Howtoplay close={() => setHowtoplay(false)} />
        </div>
      )}
      
      {Setting && (
        <div className={styles.modalOverlay}>
          <Settings close={() => setSetting(false)} saved={savedhandler} />
        </div>
      )}
      
      {quit && (
        <div className={styles.modalOverlay}>
          <Quit 
            no={() => setQuit(false)} 
            yes={() => window.open('https://remalihamza.vercel.app/','_self')}
          />
        </div>
      )}
      
      {goodtxt && (
        <div className={styles.modalOverlay}>
          <Message text='Settings Successfully Saved' color='green' comment='Enjoy your journey, chosen knight' />
        </div>
      )}
      
      <audio 
        autoPlay
        ref={audioRef} 
        src="/Mainmenu.mp3" 
        loop 
        hidden 
      />
    </div>
  )
}