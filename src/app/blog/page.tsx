import styles from './page.module.css';

// Add your blog posts here — each one becomes a card automatically
const posts = [
  {
    day: '20', month: 'May', year: '2026',
    tag: 'Arhitectural Reflections',
    title: 'The Creation of my Website!',
    excerpt: 'Ive decidede to start creating my own website to share my projects, thoughts, and experiences. This is the first post on my new blog.',
    slug: 'architectural-reflections',
  },
  
];

export default function Blog() {
  return (
    <div className="fade-in">
      <div className="section">
        <div className="section-title">Writing</div>
        <div className={styles.grid}>
          {posts.map(p => (
            // Wrap in <Link href={`/blog/${p.slug}`}> once you build individual post pages
            <div key={p.slug} className={styles.card}>
              <div className={styles.dateCol}>
                <div className={styles.day}>{p.day}</div>
                <div className={styles.month}>{p.month}</div>
              </div>
              <div>
                <div className={styles.tag}>{p.tag}</div>
                <div className={styles.title}>{p.title}</div>
                <div className={styles.excerpt}>{p.excerpt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
