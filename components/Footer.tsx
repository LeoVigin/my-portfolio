"use client";
import Image from 'next/image'
import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <nav className={styles.footer_nav}>
            <p>leovigin.pro@gmail.com</p>
            <ul className={styles.footer_list}>
                <li>
                    <a href="https://www.linkedin.com/in/leo-vigin/">
                        <Image
                            src="svg/socials/linkedin.svg"
                            alt="Logo Linkedin"
                            width={40}
                            height={40}
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/leo-vigin/">
                        <Image
                            src="svg/socials/instagram.svg"
                            alt="Logo Instagram"
                            width={40}
                            height={40}
                        />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/LeoVigin">
                        <Image
                            src="svg/socials/github.svg"
                            alt="Logo GitHub"
                            width={40}
                            height={40}
                        />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/LeoVigin">
                        <Image
                            src="svg/socials/email.svg"
                            alt="Logo Email"
                            width={40}
                            height={40}
                        />
                    </a>
                </li>
            </ul>
        </nav>
    </footer>
  );
}