import styles from './page.module.css';

export default function Projects() {
  return (
    <div className="fade-in">
      <div className="section">
        <div className={styles.placeholder}>
          <div className={styles.icon}>＋</div>
          <h2 className={styles.title}>Projects</h2>
          <p className={styles.sub}>
            Add my projects here — open source work, side projects, experiments.
          </p>
        </div>
      </div>
    </div>
  );
}
