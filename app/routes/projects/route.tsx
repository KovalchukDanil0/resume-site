import { ButtonNextPage, ProjectsGallery } from "~/components";
import "./index.scss";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1>Projects</h1>

      <ProjectsGallery />

      <ButtonNextPage variant="arrowRight" href="/contact">
        Contact Me
      </ButtonNextPage>
    </div>
  );
}
