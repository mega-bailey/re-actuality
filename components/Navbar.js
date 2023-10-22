import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

export const Navbar = () => {
  return (
    <header>
      <div className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <li className={styles.logo}>
            <Link href={'/'} className={styles.hover}>
              Re-<br></br> actuality
            </Link>
          </li>
        </div>
        <div className={styles.navbarRight}>
          <a href='/about' className={styles.hover}>
            <li>About</li>
          </a>
          <Link href='/contact' className={styles.hover}>
            <li>Contact</li>
          </Link>
        </div>
      </div>
    </header>
  );
};
