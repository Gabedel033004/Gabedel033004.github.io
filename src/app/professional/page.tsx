import styles from './page.module.css';

const experience = [
  {
    company: 'Width LLC',
    role: 'Machine Learning Engineer',
    date: 'January 2026 – May 2026',
    desc: 'Front-end and Back-end development and Automated various work flows with n8n with and without human-in-loop interactions.',
    tags: ['n8n', 'Python', 'JavaScript', 'AWS'],
  },
 
];

const skillGroups = [
  {
    title: 'Backend',
    skills: [
      { name: 'JavaScript',     level: 'Expert',     pct: 90 },
      { name: 'Python', level: 'Expert', pct: 95 },
      { name: 'Node.js',    level: 'Proficient', pct: 78 },
    ],
  },
  {
    title: 'Infrastructure',
    skills: [
      { name: 'n8n', level: 'Expert', pct: 90 },
      { name: 'AWS',        level: 'Proficient', pct: 72 },
      { name: 'API Integration',  level: 'Proficient',   pct: 75 },
    ],
  },
];

export default function Professional() {
  return (
    <div className="fade-in">
      <div className="section">
        <div className="section-title">Experience</div>
        <div className={styles.timeline}>
          {experience.map(e => (
            <div key={e.company} className={styles.tlItem}>
              <div className={styles.tlDot} />
              <div className={styles.tlCompany}>{e.company}</div>
              <div className={styles.tlRole}>{e.role}</div>
              <div className={styles.tlDate}>{e.date}</div>
              <p className={styles.tlDesc}>{e.desc}</p>
              {e.tags.length > 0 && (
                <div style={{ marginTop: 8 }}>
                  {e.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="divider" />

      <div className="section">
        <div className="section-title">Skills</div>
        <div className={styles.skillsGrid}>
          {skillGroups.map(g => (
            <div key={g.title} className={styles.skillGroup}>
              <div className={styles.skillGroupTitle}>{g.title}</div>
              {g.skills.map(s => (
                <div key={s.name} className={styles.skillBar}>
                  <div className={styles.skillName}>
                    {s.name} <span>{s.level}</span>
                  </div>
                  <div className={styles.skillTrack}>
                    <div className={styles.skillFill} style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
