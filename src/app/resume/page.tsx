import styles from './page.module.css';

const contactItems = [
  { icon: 'ti-mail',           label: 'Email',    value: 'gabedel0330@gmail.com' },
  { icon: 'ti-brand-linkedin', label: 'LinkedIn', value: 'linkedin.com/in/gabedel0330' },
  { icon: 'ti-brand-github',   label: 'GitHub',   value: 'github.com/gabedel033004' },
  { icon: 'ti-map-pin',        label: 'Location', value: 'Calgary, AB, Canada' },
];

const education = [
  { icon: 'ti-school',      label: 'University of Calgary · 2022 - 2025', value: 'BSc Software Engineering' },
];

export default function Resume() {
  return (
    <div className="fade-in">
      <div className="section">
        <div className={styles.layout}>

          <div>
            <div className="section-title">Contact</div>
            <div className={styles.card}>
              {contactItems.map(c => (
                <div key={c.label} className={styles.item}>
                  <div className={styles.ciIcon}><i className={`ti ${c.icon}`} aria-hidden="true" /></div>
                  <div>
                    <div className={styles.ciLabel}>{c.label}</div>
                    <div className={styles.ciVal}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Update href to your actual PDF in /public */}
            <a href="./2026-resume.pdf" download className={styles.downloadBtn}>
              ⬇ Download Résumé (PDF)
            </a>
          </div>

          <div>
            <div className="section-title">Education &amp; Certifications</div>
            <div className={styles.card}>
              {education.map(e => (
                <div key={e.label} className={styles.item}>
                  <div className={styles.ciIcon}><i className={`ti ${e.icon}`} aria-hidden="true" /></div>
                  <div>
                    <div className={styles.ciLabel}>{e.label}</div>
                    <div className={styles.ciVal}>{e.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
