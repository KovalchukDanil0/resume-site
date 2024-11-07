import ProjectCard, {
  Props as ProjectCardProps,
} from "~/components/ProjectCard";
import "./index.scss";

const projectsList: ProjectCardProps[] = [
  {
    title: "Paint My Pet",
    description: "Fully functional e-commerce website",
    imgSrc:
      "https://raw.githubusercontent.com/KovalchukDanil0/paint-my-pet/refs/heads/main/white-dog-landscape-interior.jpg",
    imgAlt: "White Dog Landscape Interior",
    children: (
      <div>
        <div className="flex flex-row">
          <img
            alt="test"
            src="https://raw.githubusercontent.com/KovalchukDanil0/paint-my-pet/refs/heads/main/public/black-dog-molly-interior.jpg"
            className="size-32"
          />
          <p className="mt-auto px-3">
            Et illum aut. Atque deserunt iste. Aut quasi vel officia. Adipisci
            sunt vero iusto eligendi odit qui. Unde et quod illo sed placeat
            dolorem quo placeat. Soluta sed ullam quia id quaerat quia aut
            corporis. Optio incidunt ipsum. Quam ipsa repudiandae. Voluptatem
            quis dolorem dolores neque ut. Non expedita est animi quis ut nihil
            ipsum sed.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "AEM Fixes",
    description: "Chrome Extension to automate work on my current position",
    imgSrc:
      "https://raw.githubusercontent.com/KovalchukDanil0/AEMFixes/main/public/armageddon.png",
    imgAlt: "White Dog Landscape Interior",
    children: (
      <div>
        <div className="flex flex-row">
          <p className="mt-auto px-3">To be filled</p>
        </div>
      </div>
    ),
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1>Projects</h1>

      {projectsList.map(
        ({ title, description, imgAlt, imgSrc, children }, index) => (
          <ProjectCard
            key={title}
            title={title}
            description={description}
            direction={index % 2 === 0 ? "reverse" : "default"}
            imgAlt={imgAlt}
            imgSrc={imgSrc}
          >
            {children}
          </ProjectCard>
        ),
      )}
    </div>
  );
}
