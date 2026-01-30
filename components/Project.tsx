
import projects from "@/lib/data_projects";
import ProjectDetail from "./ProjectDetail";
import styles from "../styles/Project.module.scss";

export default function ProjectsList({max}: {max: number | null}) {
  let list = projects.map((project) => (
    <ProjectDetail key={project.rowid} project={project} />
  ))
  if(max){
    list = projects.slice(0, max).map((project) => (
      <ProjectDetail key={project.rowid} project={project} />
    ))
  }

  return (
    <section className={styles.my_projects_wrap}>
      {list}
    </section>
  );
}
