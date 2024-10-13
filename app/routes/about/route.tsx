import Link from "~/components/Link";
import TechIcon from "~/components/TechIcon";
import "./index.scss";

/* const perspectiveWords = [
  "",
  "Pure CSS",
  "Perspective",
  "Text Effect",
  "Tutorial",
]; */

/* <div id="perspective">
  {perspectiveWords.map((word, idx) => (
    <div key={word}>
      <p>{word}</p>
      <p>{perspectiveWords[idx + 1]}</p>
    </div>
  ))}
</div> */

export default function AboutPage() {
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

      <div className="grid grid-flow-col grid-cols-3 grid-rows-7 items-center justify-center gap-5 md:grid-cols-4 md:grid-rows-5 xl:grid-cols-6 xl:grid-rows-3">
        <h2 className="col-span-3 md:col-span-5 xl:col-span-9">
          My Tech Stack
        </h2>

        <TechIcon href="https://nodejs.org" icon="nodejs" />
        <TechIcon href="https://react.dev" icon="react" />
        <TechIcon href="https://www.typescriptlang.org" icon="typescript" />
        <TechIcon
          href="https://developer.mozilla.org/ru/docs/Web/JavaScript"
          icon="javascript"
        />
        <TechIcon href="https://vitejs.dev" icon="vite" />
        <TechIcon href="https://webpack.js.org" icon="webpack" />

        <TechIcon href="https://www.w3schools.com/html" icon="html" />
        <TechIcon
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          icon="css"
        />
        <TechIcon href="https://tailwindcss.com" icon="tailwindcss" />
        <TechIcon href="https://sass-lang.com" icon="sass" />
        <TechIcon href="https://mdxjs.com" icon="mdx" />
        <TechIcon href="https://www.npmjs.com" icon="npm" />

        <TechIcon href="https://nextjs.org" icon="nextjs" />
        <TechIcon href="https://rollupjs.org" icon="rollup" />
        <TechIcon href="https://www.docker.com" icon="docker" />
        <TechIcon href="https://www.mongodb.com" icon="mongodb" />
        <TechIcon href="https://www.postgresql.org" icon="postgresql" />
        <TechIcon href="https://www.mysql.com" icon="mysql" />
      </div>

      <Link variant="arrow" href="projects">
        Go to my projects
      </Link>
    </div>
  );
}
