import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import TechIcon, { IconProps } from "~/components/TechIcon";

type IconListType = {
  href: string;
  icon: IconProps;
}[];

const iconList: IconListType = [
  { href: "https://nodejs.org", icon: "nodejs" },
  { href: "https://react.dev", icon: "react" },
  { href: "https://www.typescriptlang.org", icon: "typescript" },
  {
    href: "https://developer.mozilla.org/ru/docs/Web/JavaScript",
    icon: "javascript",
  },
  {
    href: "https://vitejs.dev",
    icon: "vite",
  },
  {
    href: "https://webpack.js.org",
    icon: "webpack",
  },
  {
    href: "https://www.w3schools.com/html",
    icon: "html",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: "css",
  },
  {
    href: "https://tailwindcss.com",
    icon: "tailwindcss",
  },
  {
    href: "https://sass-lang.com",
    icon: "sass",
  },
  {
    href: "https://mdxjs.com",
    icon: "mdx",
  },
  {
    href: "https://www.npmjs.com",
    icon: "npm",
  },
  {
    href: "https://nextjs.org",
    icon: "nextjs",
  },
  {
    href: "https://rollupjs.org",
    icon: "rollup",
  },
  {
    href: "https://www.docker.com",
    icon: "docker",
  },
  {
    href: "https://www.mongodb.com",
    icon: "mongodb",
  },
  {
    href: "https://www.postgresql.org",
    icon: "postgresql",
  },
  {
    href: "https://www.mysql.com",
    icon: "mysql",
  },
];

export default function TechGallery({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={twMerge(
        "grid grid-flow-col grid-cols-3 grid-rows-7 items-center justify-center gap-5",
        "md:grid-cols-4 md:grid-rows-5",
        "lg:grid-cols-5 lg:grid-rows-4",
        "xl:grid-cols-6 xl:grid-rows-3",
        className,
      )}
    >
      <h2 className="col-span-3 md:col-span-5 lg:col-span-9 xl:col-span-9">
        My Tech Stack
      </h2>

      {iconList.map(({ href, icon }) => (
        <TechIcon key={icon} size="large" href={href} icon={icon} />
      ))}
    </div>
  );
}
