import { getProject } from "@/actions/GetProject";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ rowid: string }>;
}) {
  const { rowid } = await params;

  const projectId = Number(rowid);

  if (Number.isNaN(projectId)) {
    notFound();
  }

  const project = getProject(projectId);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <h1>{project.title_role}</h1>
      <p>{project.text}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </main>
  );
}
