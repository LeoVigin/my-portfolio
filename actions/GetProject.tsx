import projects from "@/lib/data_projects"; // Path to your data file
import { Project } from "@/types/Project";

export function getProject(id: number): Project | null {
  return projects.find(p => p.rowid === id) ?? null;
}