import type { MetaFunction } from "@remix-run/node";
import { LinkNextPage, TechGallery } from "~/components";

const title = "About" + import.meta.env.VITE_META_SITE;

export const meta: MetaFunction = () => [
  {
    content: title,
    property: "og:title",
  },
  {
    name: "description",
    content: "Here you can find my description and skills",
  },
  { title },
];

export default function AboutPage() {
  return (
    <div className="mx-3 flex flex-col items-center justify-center gap-10 text-center md:mx-10">
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

      <LinkNextPage to="/projects">Go to my projects</LinkNextPage>
    </div>
  );
}
