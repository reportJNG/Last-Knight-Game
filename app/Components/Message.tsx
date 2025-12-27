import styles from './Message.module.css';

type MessageProps = {
  text: string;
  color: 'white' | 'red' | 'green'; 
  comment: string;
};

export default function Message({ text, color, comment }: MessageProps) {
  return (
    <div className={`${styles.message} ${styles[color]}`}>
      <div className={styles.midcontainer}>
        <strong className={styles.bigtxt}>{text}</strong>
      </div>
      <div className={styles.downtobigtxt}>
        <strong className={styles.minitxt}>{comment}</strong>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}