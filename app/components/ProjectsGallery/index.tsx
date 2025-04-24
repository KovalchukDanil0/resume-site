import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import ProjectCard from "./ProjectCard";
import AemFixes from "./aem-fixes.mdx";
import PaintMyPet from "./paint-my-pet.mdx";

type Props = ComponentProps<"div">;

export default function ProjectsGallery({
  className,
  ...props
}: Readonly<Props>) {
  return (
    <div {...props} className={twMerge("flex flex-col gap-8", className)}>
      <ProjectCard
        title="Paint My Pet"
        description="Fully functional e-commerce website"
        imgAlt="White Dog Landscape Interior"
        imgSrc="img/interior-dog-portrait.jpg"
        href="https://github.com/KovalchukDanil0/paint-my-pet"
      >
        <PaintMyPet />
      </ProjectCard>

      <ProjectCard
        title="AEM Fixes"
        description="Chrome Extension to automate work on my current position"
        imgAlt="AEM Fixes Logo"
        imgSrc="img/aem-fixes-logo.png"
        href="https://github.com/KovalchukDanil0/AEMFixes"
        reverse
      >
        <AemFixes />
      </ProjectCard>
    </div>
  );
}
