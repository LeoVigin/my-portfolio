"use client";
import styles from '../styles/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
      <p>Léo Vigin</p>
        <ul className={styles.nav_list}>
            <li>
                <a href="">HOME</a>
            </li>
            <li>
                <a href="">ABOUT</a>
            </li>
            <li>
                <a href="">PROJECTS</a>
            </li>
            <li>
                <a href="">CONTACT ME</a>
            </li>
        </ul>
      </nav>
    </header>
  );
}