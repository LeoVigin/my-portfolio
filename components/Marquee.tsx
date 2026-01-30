"use client"
import styles from '../styles/Marquee.module.scss'
import logoRowOnes from "@/lib/data_logo1";
import logoRowTwos from "@/lib/data_logo2";
import Image from 'next/image'

export default function Marquee() {
  const logo_firstlist = logoRowOnes.map((logoRowOne, i) => (
    <div key={i} className={styles.marquee_div}>
        <Image
        src={`/svg/tech/${logoRowOne.src}`}
        alt={`${logoRowOne.name} Logo`}
        width={50}
        height={50}
        />
        <p>{logoRowOne.name}</p>
    </div>
  ));

  const logo_secondlist = logoRowTwos.map((logoRowTwo, i) => (
    <div key={i} className={styles.marquee_div}>
        <Image
        src={`/svg/tech/${logoRowTwo.src}`}
        alt={`${logoRowTwo.name} Logo`}
        width={50}
        height={50}
        />
        <p>{logoRowTwo.name}</p>
    </div>
  ));

  return (
    <section className={styles.section}>
        <article className={styles.wrapper}>
            <section className={styles.marquee}>
                <div className={styles.marquee_group}>
                    {logo_firstlist}
                </div>
                <div aria-hidden="true" className={styles.marquee_group}>
                    {logo_firstlist}
                </div>
            </section>
            <section className={`${styles.marquee} ${styles.marquee_reverse}`}>
                <div className={styles.marquee_group}>
                    {logo_secondlist}
                </div>
                <div aria-hidden="true" className={styles.marquee_group}>
                    {logo_secondlist}
                </div>
            </section>
        </article>
    </section>
  );
}