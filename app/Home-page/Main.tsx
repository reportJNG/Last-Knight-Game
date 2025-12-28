'use client'
import Howtoplay from './Howtoplay';
import styles from './Main.module.css';
import { useEffect, useRef, useState } from 'react';
import Settings from './Settings';
import Quit from './Quit';
import Message from '../Components/Message';
import PixelSnow from './PixelSnow';

export default function Main() {
  const [Sound, setSound] = useState<boolean>(true);
  const [howtoplay, setHowtoplay] = useState<boolean>(false);
  const [Setting, setSetting] = useState<boolean>(false);
  const [quit, setQuit] = useState<boolean>(false);
  const [goodtxt, setGoodtxt] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  
  const savedhandler = () => {
    setSetting(false);
    audioRefC.current?.play();
    setGoodtxt(true);
    const time = setTimeout(() => {
      setGoodtxt(false);
    }, 5000);
    return () => clearTimeout(time);
  }
   useEffect(() => {
    if (audioRefC.current) {
      audioRefC.current.playbackRate = 2.2; 
    }
  }, []);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioRefC = useRef<HTMLAudioElement>(null);
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
  
  useEffect(() => { 
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className={styles.mainWrapper}>
      {/* PixelSnow as the ONLY background */}
      <div className={styles.snowBackground}>
        <PixelSnow 
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={200}
          speed={1.25}
          density={0.3}
          direction={125}
          brightness={1}
        />
      </div>
      
      {/* Main content - transparent over PixelSnow */}
      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          <div className={styles.upper}>
            <button 
              className={styles.soundbtn} 
              onClick={toggleaudio} 
              aria-label={Sound ? "Mute audio" : "Unmute audio"}
            >
              {Sound ? "🔊" : "🔇"}
            </button>
            <h1 className={styles.gamename} data-text="Last Knight">Last Knight</h1>
          </div>
          
          <div className={styles.main}>
            <button className={styles.bigbuttonevents}>
              <i className="fi fi-sr-two-swords"></i>Begin Quest
            </button>
            <button 
              className={styles.bigbuttonevents} 
              onClick={() => {setHowtoplay(true);audioRefC.current?.play(); }}
            >
              <i className="fi fi-bs-book-alt"></i> How To Play
            </button>
            <button 
              className={styles.bigbuttonevents} 
              onClick={() => {setSetting(true);audioRefC.current?.play();}}
            >
              <i className="fi fi-bs-gears"></i> Settings
            </button>
            <button className={styles.bigbuttonevents} onClick={() => {audioRefC.current?.play();window.open('https://remalihamza.vercel.app/','_blank')}}>
              <i className="fi fi-ss-user-crown"></i> Visit Kingdom
            </button>
            <button 
              className={styles.bigbuttonevents} 
              onClick={() => {setQuit(true);audioRefC.current?.play();}}
            >
              <i className="fi fi-sr-entrance"></i>Exit Realm
            </button>
          </div>
          
          {howtoplay && (
            <div className={styles.modalOverlay}>
              <Howtoplay close={() => {setHowtoplay(false);audioRefC.current?.play();} }/>
            </div>
          )}
          
          {Setting && (
            <div className={styles.modalOverlay}>
              <Settings close={() => {setSetting(false);audioRefC.current?.play();}} saved={savedhandler} volume={volume} setVolume={setVolume}/>
            </div>
          )}
          
          {quit && (
            <div className={styles.modalOverlay}>
              <Quit 
                no={() => {setQuit(false);audioRefC.current?.play();}} 
                yes={() => window.open('https://remalihamza.vercel.app/','_self')}
              />
            </div>
          )}
          
          {goodtxt && (
            
              <Message text='Settings Successfully Saved' color='green' comment='Enjoy your journey, chosen knight' />
            
          )}
          
          <audio 
            autoPlay
            ref={audioRef} 
            src="/Mainmenu.mp3" 
            loop 
            hidden 
          />
           <audio 
            ref={audioRefC} 
            src="/Click.mp3"
            hidden 
          />
        </div>
      </div>
    </div>
  );
}