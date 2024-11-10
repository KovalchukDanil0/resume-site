import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { TechIcon } from "~/components";

export default function TechGallery({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={twMerge(
        "grid grid-flow-col grid-cols-3 grid-rows-7 items-center justify-center gap-5 md:grid-cols-4 md:grid-rows-5 xl:grid-cols-6 xl:grid-rows-3",
        className,
      )}
    >
      <h2 className="col-span-3 md:col-span-5 xl:col-span-9">My Tech Stack</h2>

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
  );
}
