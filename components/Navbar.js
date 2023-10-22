import React from 'react';
import styles from '@/styles/Navbar.module.css';

export const Navbar = () => {
  return (
    <header>
      <div className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <li className={styles.logo}>
            <a href='#' className={styles.hover}>
              Re-<br></br> actuality
            </a>
          </li>
        </div>
        <div className={styles.navbarRight}>
          <a href='/about' className={styles.hover}>
            <li>About</li>
          </a>
          <a href='/contact' className={styles.hover}>
            <li>Contact</li>
          </a>
        </div>
      </div>
    </header>
  );
};
