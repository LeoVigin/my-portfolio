import Projects from "@/components/Project";
import { Suspense } from "react";

export default function ProjectsList() {
  return (
    <>
      <h1>Liste des Projets :</h1>
      <Suspense>
        <Projects max={null} />
      </Suspense>
    </>
  );
}
