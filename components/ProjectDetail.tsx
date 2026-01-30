
import Link from "next/link";
import styles from "../styles/Project.module.scss";
import { Project } from "@/types/Project";

export default function ProjectDetail({project} : {project: Project}){
    return (
        <div className={styles.my_project_item}>
            {project.text}
            <Link href={`/project/${project.rowid}`} className={styles.project_link}>
                <p>Read more..</p>
            </Link>
            <div className={styles.my_project_infos}>
                <h4>{project.title_role}</h4>
                <Link href={project.link}>
                <img
                src={project.link_image}
                alt="Link of redirection"
                className={styles.project_image}
                />
                </Link>
            </div>
        </div>
    )
}