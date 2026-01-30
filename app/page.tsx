import Header from "@/components/Header";
import Project from "@/components/Project";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import styles from '../styles/home.module.scss'
import { Suspense } from "react";

export default function Home() {
  const hasError = true;
  return (
    <><Header />
      <main>
        <section className={styles.section}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        </section>
        <section className={styles.about_me}>
          <p>image</p>
          <div>
            <h2 className={styles.about_me_title}>ABOUT ME</h2>
            <p className={styles.about_me_text}>I’m Léo, a web development student. <br />
            I design and build modern, responsive websites, handling both the design and development sides of projects. 
            <br /> I’ve worked on websites for freelancers and  companies, I enjoy turning ideas into clean, functional, and visually engaging experiences on the web.</p>
          </div>
        </section>
        <section className={styles.my_projects}>
          <div className={styles.my_projects_pres}>
            <h3>MY PROJECTS</h3>
            <p>Here are some websites I’ve worked on or taken part in</p>
          </div>
          <Suspense>
            {/* fallback={<UsersLoader />} */}
            <Project max={8}/>
          </Suspense>
        </section>
        <Suspense>
          <Marquee/>
        </Suspense>
        <section className={styles.about_me}>
          <div>
            <h2 className={styles.about_me_title}>ABOUT ME</h2>
            <p className={styles.about_me_text}>Do you have a project idea and are looking for someone to help bring it to life? Don’t hesitate to contact me, either through this form or via my social media :)) <br />
            I’m always eager to improve my skills by working on new and exciting projects.</p>
          </div>
          <p>Form</p>
        </section>
      </main>
      <Footer/>
    </>
  );
}
