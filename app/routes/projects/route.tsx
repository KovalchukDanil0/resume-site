import Button from "~/components/Button";
import ProjectCard from "~/components/ProjectCard";
import "./index.scss";

/* const gg = [
  {
    buttonHref: "/",
    title: "Paint My Pet",
    description: "Fully functional e-commerce website",
    imgSrc:
      "https://raw.githubusercontent.com/KovalchukDanil0/paint-my-pet/refs/heads/main/white-dog-landscape-interior.jpg",
    imgAlt: "White Dog Landscape Interior",
  },
]; */

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1>Projects</h1>

      <ProjectCard
        title="Paint My Pet"
        description="Fully functional e-commerce website"
        imgSrc="https://raw.githubusercontent.com/KovalchukDanil0/paint-my-pet/refs/heads/main/white-dog-landscape-interior.jpg"
        imgAlt="White Dog Landscape Interior"
        buttonText="Text"
        direction="reverse"
      >
        <img src="https://raw.githubusercontent.com/KovalchukDanil0/paint-my-pet/refs/heads/main/public/black-dog-molly-interior.jpg" />
        <p>
          Et illum aut. Atque deserunt iste. Aut quasi vel officia. Adipisci
          sunt vero iusto eligendi odit qui. Unde et quod illo sed placeat
          dolorem quo placeat. Soluta sed ullam quia id quaerat quia aut
          corporis. Optio incidunt ipsum. Quam ipsa repudiandae. Voluptatem quis
          dolorem dolores neque ut. Non expedita est animi quis ut nihil ipsum
          sed.
        </p>

        <Button form="dialog">Return</Button>
      </ProjectCard>

      <ProjectCard
        title="Fully functional e-commerce website"
        description="Fully functional e-commerce website"
        imgSrc="https://raw.githubusercontent.com/KovalchukDanil0/paint-my-pet/refs/heads/main/white-dog-landscape-interior.jpg"
        direction="default"
      />

      <ProjectCard
        title="Paint My Pet"
        description="Fully functional e-commerce website"
        imgSrc="https://raw.githubusercontent.com/KovalchukDanil0/paint-my-pet/refs/heads/main/white-dog-landscape-interior.jpg"
        imgAlt="White Dog Landscape Interior"
        direction="reverse"
      />
    </div>
  );
}
