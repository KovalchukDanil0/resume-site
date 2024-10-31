import Button from "~/components/Button";
import TechIcon from "~/components/TechIcon";
import "./index.scss";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mx-3 text-center md:mx-10">
      <div className="fixed top-0 left-0 w-full h-full -rotate-45 -z-50">
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

      <div className="grid items-center justify-center grid-flow-col grid-cols-3 gap-5 grid-rows-7 md:grid-cols-4 md:grid-rows-5 xl:grid-cols-6 xl:grid-rows-3">
        <h2 className="col-span-3 md:col-span-5 xl:col-span-9">
          My Tech Stack
        </h2>

        <TechIcon size="large" href="https://nodejs.org" icon="nodejs" />
        <TechIcon size="large" href="https://react.dev" icon="react" />
        <TechIcon
          size="large"
          href="https://www.typescriptlang.org"
          icon="typescript"
        />
        <TechIcon
          size="large"
          href="https://developer.mozilla.org/ru/docs/Web/JavaScript"
          icon="javascript"
        />
        <TechIcon size="large" href="https://vitejs.dev" icon="vite" />
        <TechIcon size="large" href="https://webpack.js.org" icon="webpack" />

        <TechIcon
          size="large"
          href="https://www.w3schools.com/html"
          icon="html"
        />
        <TechIcon
          size="large"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          icon="css"
        />
        <TechIcon
          size="large"
          href="https://tailwindcss.com"
          icon="tailwindcss"
        />
        <TechIcon size="large" href="https://sass-lang.com" icon="sass" />
        <TechIcon size="large" href="https://mdxjs.com" icon="mdx" />
        <TechIcon size="large" href="https://www.npmjs.com" icon="npm" />

        <TechIcon size="large" href="https://nextjs.org" icon="nextjs" />
        <TechIcon size="large" href="https://rollupjs.org" icon="rollup" />
        <TechIcon size="large" href="https://www.docker.com" icon="docker" />
        <TechIcon size="large" href="https://www.mongodb.com" icon="mongodb" />
        <TechIcon
          size="large"
          href="https://www.postgresql.org"
          icon="postgresql"
        />
        <TechIcon size="large" href="https://www.mysql.com" icon="mysql" />
      </div>

      <Button href="projects">Go to my projects</Button>
    </div>
  );
}
