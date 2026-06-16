'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Nav.module.css';

const links = [
  { href: '/',             label: 'Home' },
  { href: '/professional', label: 'Professional' },
  { href: '/personal',     label: 'Personal' },
  { href: '/resume',       label: 'Résumé' },
  { href: '/blog',         label: 'Blog' },
];

const moreLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/travel',   label: 'Travel' },
  // Add more tabs here
];

export default function Nav() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        Gabriel<span>Delisle</span>
      </Link>

      <div className={styles.links}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.btn} ${pathname === href ? styles.active : ''}`}
          >
            {label}
          </Link>
        ))}

        <div className={styles.more}>
          <button
            className={`${styles.btn} ${moreLinks.some(l => pathname === l.href) ? styles.active : ''}`}
            onClick={() => setMoreOpen(o => !o)}
            aria-expanded={moreOpen}
          >
            More ▾
          </button>
          {moreOpen && (
            <div className={styles.dropdown}>
              {moreLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`${styles.btn} ${styles.dropdownBtn} ${pathname === href ? styles.active : ''}`}
                  onClick={() => setMoreOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
