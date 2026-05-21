import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="fade-in">
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroTag}>Engineer · Builder · Problem Solver</div>
        <h1 className={styles.heroName}>Gabriel Delisle</h1>
        <p className={styles.heroTitle}>Software Engineer · Calgary, AB</p>
        <p className={styles.heroBio}>
          I build scalable systems and thoughtful products. Passionate about clean architecture,
          developer experience, and the occasional overengineered home automation project.
        </p>
        <div className={styles.heroBtns}>
          <Link href="/resume" className="btn-primary">View Résumé</Link>
          <Link href="https://www.linkedin.com/in/gabedel0330/" className="btn-outline">Read My Blog</Link>
        </div>
      </div>

      {/* Stats */}
      <div className={styles.statsRow}>
        {[
          { num: '1+', label: 'Years Experience' },
          { num: '3', label: 'Projects Shipped' },
          { num: '0',  label: 'Open Source Repos' },
        ].map(s => (
          <div key={s.label} className={styles.stat}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div className="section">
        <div className="section-title">Quick links</div>
        <div className={styles.highlights}>
          {[
            { href: '/professional', label: 'Professional', title: 'Career & Skills',      sub: 'Work history, stack, achievements' },
            { href: '/personal',     label: 'Personal',     title: 'Life Outside Work',    sub: 'Who I am beyond the terminal' },
            { href: '/blog',         label: 'Blog',         title: 'Latest Writing',       sub: 'Notes on tech, tools & ideas' },
          ].map(c => (
            <Link key={c.href} href={c.href} className={styles.card}>
              <div className={styles.cardLabel}>{c.label}</div>
              <div className={styles.cardTitle}>{c.title}</div>
              <div className={styles.cardSub}>{c.sub}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
