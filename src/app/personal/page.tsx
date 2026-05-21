import styles from './page.module.css';
import Image from "next/image";
import photo from "./Canadiens.jpg";

const values = [
  { icon: '🎯', label: 'Quality over quantity' },
  { icon: '🤝', label: 'Teamwork' },
  { icon: '🌱', label: 'Lifelong learning' },
  { icon: '🔍', label: 'Intellectual honesty' },
  { icon: '⚖️', label: 'Work–life balance' },
  { icon: '🌍', label: 'Impact at scale' },
];

export default function Personal() {
  return (
    <div className="fade-in">
      <div className="section">
        <div className="section-title">About me</div>


        <p className={styles.bio}>
          Outside of engineering, I&apos;m an extroverted person with a lot going on. I was born in Ottawa and grew up in Calgary.
          My family is from Montreal and I love spending time in Quebec. GO HABS GO!
        </p>
        <p className={styles.bio}>
          I&apos;m a son, brother, and friend. I love spending time with my family and friends, and I&apos;m always up for a good conversation.
        </p>
      </div>

      <div className="divider" />

      <div className="section">
        <div className="section-title">Values</div>
        <div className={styles.valuesList}>
          {values.map(v => (
            <div key={v.label} className={styles.valueChip}>
              <div className={styles.vi}>{v.icon}</div>
              <p>{v.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
