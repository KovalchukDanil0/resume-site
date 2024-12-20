import { ComponentProps, ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import { Link, ProjectCard } from "~/components";

type Props = ComponentProps<"div">;

export default function ProjectsGallery({
  className,
  ...props
}: Readonly<Props>): ReactElement {
  return (
    <div {...props} className={twMerge("flex flex-col gap-8", className)}>
      <ProjectCard
        title="Paint My Pet"
        description="Fully functional e-commerce website"
        imgAlt="White Dog Landscape Interior"
        imgSrc="img/interior-dog-portrait.jpg"
        href="https://github.com/KovalchukDanil0/paint-my-pet"
      >
        <>
          <p className="mt-auto">
            This is a{" "}
            <Link to="https://nextjs.org/" target="_blank">
              Next.js
            </Link>{" "}
            painting E-Shop project that using{" "}
            <Link to="https://www.typescriptlang.org" target="_blank">
              TypeScript
            </Link>
            ,{" "}
            <Link to="https://react.dev" target="_blank">
              React
            </Link>
            ,{" "}
            <Link to="https://tailwindcss.com" target="_blank">
              TailwindCss
            </Link>
            ,{" "}
            <Link to="https://sass-lang.com" target="_blank">
              Sass
            </Link>{" "}
            under the hood together with{" "}
            <Link to="https://supabase.com" target="_blank">
              Supabase
            </Link>{" "}
            back-end server.
          </p>

          <img
            alt="Black Dog Molly Interior"
            src="https://raw.githubusercontent.com/KovalchukDanil0/paint-my-pet/refs/heads/main/public/black-dog-molly-interior.jpg"
            className="size-64"
          />
        </>
      </ProjectCard>

      <ProjectCard
        title="AEM Fixes"
        description="Chrome Extension to automate work on my current position"
        imgAlt="AEM Fixes Logo"
        imgSrc="img/aem-fixes-logo.png"
        href="https://github.com/KovalchukDanil0/AEMFixes"
        reverse
      >
        <>
          <p>
            AEM Fixes is a modern Chrome Extension designed to eliminate
            repetitive everyday tasks in AEM Engine by automating them.
          </p>

          <p className="mt-auto">To be filled</p>
        </>
      </ProjectCard>
    </div>
  );
}
