import { MetaFunction } from "@remix-run/node";
import { ReactElement } from "react";
import { ButtonNextPage, ProjectsGallery } from "~/components";
import "./index.scss";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects | Danylo Resume" },
    {
      property: "og:title",
      content: "Danylo Resume Projects Page",
    },
    {
      name: "description",
      content: "Look, my projects",
    },
  ];
};

export default function ProjectsPage(): ReactElement {
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
