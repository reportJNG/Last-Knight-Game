import { useEffect, useRef, useState } from 'react';
import styles from './Textloader.module.css';

interface TextloaderProps {
  text: string;
  endedtext:()=>void;
  clicked:()=>void;
}

export default function Textloader({ text,endedtext,clicked }: TextloaderProps) {
  const [position, setPosition] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const audio = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (position < text.length) {
      audio.current?.play();
      const timer = setTimeout(() => {
        setPosition(prev => prev + 1);
        
        // Auto-scroll to keep cursor in view
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, 30); // Faster typing speed
      
      return () => clearTimeout(timer);
    } else {
      // Stop audio when typing is complete
      setTimeout(() => {
        audio.current?.pause();
        setIsComplete(true);
        endedtext();
      }, 28500);
    }
  }, [position, text.length]);
  
  // Split text into paragraphs for better display
  const paragraphs = text.split('\n');
  
  // Calculate which paragraph and position we're at
  let currentPosition = 0;
  const displayParagraphs = [];
  
  for (const paragraph of paragraphs) {
    if (currentPosition + paragraph.length + 1 <= position) {
      // Entire paragraph is complete
      displayParagraphs.push({
        text: paragraph,
        complete: true,
        lastCharIndex: -1
      });
    } else if (currentPosition < position) {
      // Partially typed paragraph
      const charsInThisParagraph = position - currentPosition;
      displayParagraphs.push({
        text: paragraph.substring(0, charsInThisParagraph),
        complete: false,
        lastCharIndex: charsInThisParagraph - 1
      });
      break; // This is the current paragraph being typed
    } else {
      // Not reached this paragraph yet
      break;
    }
    
    currentPosition += paragraph.length + 1; // +1 for the newline character
  }

  const skippedtext=()=>{//here player chooose to skip text
      clicked();
      setPosition(0);
      setIsComplete(false);
      endedtext();
  }
  return (
    <div className={styles.pageContainer}>
      <div className={`${styles.container} ${isComplete ? styles.complete : ''}`} ref={containerRef}>
        <div className={styles.textContent}>
          {displayParagraphs.map((para, paraIndex) => (
            <p key={paraIndex} className={styles.paragraph}>
              {para.text.split('').map((char, charIndex) => (
                <span 
                  key={`${paraIndex}-${charIndex}`}
                  className={styles.char}
                  style={{ 
                    '--char-index': charIndex,
                    animationDelay: `${charIndex * 0.04}s`
                  } as React.CSSProperties}
                >
                  {char}
                </span>
              ))}
              
             
            </p>
          ))}
        </div>
        
      </div>
      <button className={styles.rightdownsc} onClick={skippedtext}><i className="fi fi-br-right"></i></button>
      <audio 
          src="/typing-sound.mp3" 
          loop 
          ref={audio}
          preload="auto"
        />
    </div>
  );
}