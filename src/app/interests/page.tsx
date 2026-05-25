import styles from './page.module.css';

const interests = [
  { icon: 'ti-hockey-stick',        title: 'Hockey',    desc: 'Montreal Canadiens die hard fan' },
  { icon: 'ti-mountain',            title: 'Travelling',   desc: 'Montreal will always be my favourite city' },
  { icon: 'ti-microphone',title: 'Concerts',  desc: 'Everything from Rihanna to Luke Combs' },
  { icon: 'ti-music',           title: 'Music',     desc: 'Hip hop, Country, 2000s anthems' },
  { icon: 'ti-shoe',        title: 'Sneakers',   desc: 'Collecting limited edition releases - Sneakerhead' },
  // Add more interests here — copy the object pattern above
];

export default function Interests() {
  return (
    <div className="fade-in">
      <div className="section">
        <div className="section-title">What I love</div>
        <div className={styles.grid}>
          {interests.map(i => (
            <div key={i.title} className={styles.card}>
              <div className={styles.icon}>
                <i className={`ti ${i.icon}`} aria-hidden="true" />
              </div>
              <div className={styles.title}>{i.title}</div>
              <div className={styles.desc}>{i.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
