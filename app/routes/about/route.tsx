import Link from "~/components/Link";
import "./index.scss";

export default function AboutPage() {
  return (
    <div className="mx-3 flex flex-col items-center justify-center gap-10 text-center md:mx-10">
      <h1 className="uppercase">About Me</h1>

      <h3>
        Hi there&nbsp;👋, I am from Ukraine&nbsp;🇺🇦, located in Prague&nbsp;🇨🇿,
        enjoying automating things&nbsp;🤖 but also building websites from
        scratch&nbsp;🧙‍♂️. In no-bugs time improving my skills in brewing&nbsp;🍺,
        participating marathons&nbsp;🏃, mountain biking&nbsp;🚵 and listen to
        music on festivals&nbsp;👨‍🎤.
      </h3>

      <div className="fixed left-0 top-0 -z-50 h-full w-full -rotate-45">
        {Array(50)
          .fill(null)
          .map((value) => (
            <div key={value} className="star" />
          ))}
      </div>

      <Link variant="arrow" href="projects">
        Go to my projects
      </Link>
    </div>
  );
}
