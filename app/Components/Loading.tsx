import styles from './Loading.module.css';

interface LoadingProps {
  level: string | null;
}

export default function Loading({ level }: LoadingProps) {
  return (
    <div className={styles.container}>
      {/* Main level text that appears center screen */}
      <div className={styles.text}>
        <h2 className={styles.textmidscreen}>{level}</h2>
      </div>

      {/* Blood-filled loading line with dramatic animation */}
      <div className={styles.loadingTrack}>
        <div className={styles.loadingBlood}></div>
        <div className={styles.loadingDrip}></div>
        <div className={styles.loadingGlow}></div>
      </div>

      {/* Loading indicator text with pulsing effect */}
      <div className={styles.underloadingscreen}>
        <span className={styles.loadingText}>LOADING</span>
        <div className={styles.loadingDots}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
    </div>
  );
}