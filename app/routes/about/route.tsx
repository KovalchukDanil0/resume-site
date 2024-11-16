import { ReactElement } from "react";
import { ButtonNextPage, TechGallery } from "~/components";
import "./index.scss";

export default function AboutPage(): ReactElement {
  return (
    <div className="mx-3 flex flex-col items-center justify-center gap-10 text-center md:mx-10">
      <div className="fixed left-0 top-0 -z-50 h-full w-full -rotate-45">
        {Array.from({ length: 50 }, (_ev, num) => num).map((value) => (
          <div key={value} className="star" />
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="uppercase">About Me</h1>

        <h3>
          Hi there&nbsp;👋, I am from Ukraine&nbsp;🇺🇦, located in
          Prague&nbsp;🇨🇿, enjoying automating things&nbsp;🤖 but also building
          websites from scratch&nbsp;🧙‍♂️. In no-bugs time improving my skills in
          brewing&nbsp;🍺, participating marathons&nbsp;🏃, mountain
          biking&nbsp;🚵 and listen to music on festivals&nbsp;👨‍🎤.
        </h3>
      </div>

      <TechGallery />

      {/* <h2>Music</h2>
      <iframe
        width="420"
        height="315"
        src="https://www.youtube.com/embed/pTKqWmpNPiI"
      /> */}

      <ButtonNextPage variant="arrowRight" href="/projects">
        Go to my projects
      </ButtonNextPage>
    </div>
  );
}
