import styles from '../projects/page.module.css';

export default function Travel() {
  return (
    <div className="fade-in">
      <div className="section">
        <div className={styles.placeholder}>
          <div className={styles.icon}>✈️</div>
          <h2 className={styles.title}>Travel</h2>
          <p className={styles.sub}>
            Document my adventures here.
          </p>
        </div>
      </div>
    </div>
  );
}
