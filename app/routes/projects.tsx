import type { MetaFunction } from "@remix-run/node";
import { LinkNextPage, ProjectsGallery } from "~/components";

const title = "Projects" + import.meta.env.VITE_META_SITE;

export const meta: MetaFunction = () => [
  {
    content: title,
    property: "og:title",
  },
  {
    name: "description",
    content: "Look, my projects",
  },
  { title },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1>Projects</h1>

      <ProjectsGallery />

      <LinkNextPage to="/contact">Contact Me</LinkNextPage>
    </div>
  );
}
