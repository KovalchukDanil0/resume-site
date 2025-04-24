import type { ComponentProps, FunctionComponent, SVGProps } from "react";
import { twMerge } from "tailwind-merge";
import {
  Css,
  Docker,
  Html,
  JavaScript,
  Mdx,
  MongoDb,
  MySql,
  NextJs,
  NodeJs,
  Npm,
  PostgresSql,
  React,
  Rollup,
  Sass,
  TailwindCss,
  TypeScript,
  Vite,
  Webpack,
} from "~/assets/svg";
import TechIcon from "./TechIcon";

type Props = ComponentProps<"div">;

type IconListProps = {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  link: string;
}[];

const iconList: IconListProps = [
  {
    icon: NodeJs,
    link: "https://nodejs.org",
  },
  {
    icon: React,
    link: "https://react.dev",
  },
  {
    icon: TypeScript,
    link: "https://www.typescriptlang.org",
  },
  {
    icon: JavaScript,
    link: "https://developer.mozilla.org/ru/docs/Web/JavaScript",
  },
  {
    icon: Vite,
    link: "https://vitejs.dev",
  },
  {
    icon: Webpack,
    link: "https://webpack.js.org",
  },
  {
    icon: Html,
    link: "https://www.w3schools.com/html",
  },
  {
    icon: Css,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: TailwindCss,
    link: "https://tailwindcss.com",
  },
  {
    icon: Sass,
    link: "https://sass-lang.com",
  },
  {
    icon: Mdx,
    link: "https://mdxjs.com",
  },
  {
    icon: Npm,
    link: "https://www.npmjs.com",
  },
  {
    icon: NextJs,
    link: "https://nextjs.org",
  },
  {
    icon: Rollup,
    link: "https://rollupjs.org",
  },
  {
    icon: Docker,
    link: "https://www.docker.com",
  },
  {
    icon: MongoDb,
    link: "https://www.mongodb.com",
  },
  {
    icon: PostgresSql,
    link: "https://www.postgresql.org",
  },
  {
    icon: MySql,
    link: "https://www.mysql.com",
  },
];

export default function TechGallery({ className, ...props }: Props) {
  return (
    <div
      {...props}
      className={twMerge(
        "grid grid-flow-col grid-cols-3 grid-rows-7 items-center justify-center gap-5 md:grid-cols-4 md:grid-rows-5 lg:grid-cols-5 lg:grid-rows-4 xl:grid-cols-6 xl:grid-rows-3",
        className,
      )}
    >
      <h2 className="col-span-3 md:col-span-5 lg:col-span-9 xl:col-span-9">
        My Tech Stack
      </h2>

      {iconList.map(({ icon, link }) => (
        <TechIcon key={link} icon={icon} to={link} />
      ))}
    </div>
  );
}
