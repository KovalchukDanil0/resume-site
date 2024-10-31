import { ComponentProps, ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import {
  CssSvg,
  DockerSvg,
  HtmlSvg,
  JavaScriptSvg,
  MdxSvg,
  MongoDBSvg,
  MySqlSvg,
  NextJsSvg,
  NodeJsSvg,
  NpmSvg,
  PostgreSqlSvg,
  ReactSvg,
  RollupSvg,
  SassSvg,
  TailwindCssSvg,
  TypeScriptSvg,
  ViteSvg,
  WebpackSvg,
} from "../Svg";

type IconProps =
  | "nodejs"
  | "react"
  | "typescript"
  | "javascript"
  | "vite"
  | "webpack"
  | "html"
  | "css"
  | "tailwindcss"
  | "sass"
  | "mdx"
  | "npm"
  | "nextjs"
  | "rollup"
  | "docker"
  | "mongodb"
  | "postgresql"
  | "mysql";

type Props = {
  href: ComponentProps<"a">["href"];
  icon: IconProps;
  size: "large" | "small";
};

type IconElmProps = (props: ComponentProps<"svg">) => ReactElement;

function determineIcon(icon: string): IconElmProps {
  let IconElm: IconElmProps;

  switch (icon) {
    case "nodejs":
      IconElm = NodeJsSvg;
      break;
    case "react":
      IconElm = ReactSvg;
      break;
    case "typescript":
      IconElm = TypeScriptSvg;
      break;
    case "javascript":
      IconElm = JavaScriptSvg;
      break;
    case "vite":
      IconElm = ViteSvg;
      break;
    case "webpack":
      IconElm = WebpackSvg;
      break;
    case "html":
      IconElm = HtmlSvg;
      break;
    case "css":
      IconElm = CssSvg;
      break;
    case "tailwindcss":
      IconElm = TailwindCssSvg;
      break;
    case "sass":
      IconElm = SassSvg;
      break;
    case "mdx":
      IconElm = MdxSvg;
      break;
    case "npm":
      IconElm = NpmSvg;
      break;
    case "nextjs":
      IconElm = NextJsSvg;
      break;
    case "rollup":
      IconElm = RollupSvg;
      break;
    case "docker":
      IconElm = DockerSvg;
      break;
    case "mongodb":
      IconElm = MongoDBSvg;
      break;
    case "postgresql":
      IconElm = PostgreSqlSvg;
      break;
    case "mysql":
      IconElm = MySqlSvg;
      break;
    default:
      throw new Error(`specified icon "${icon}" doesn't exist`);
  }

  return IconElm;
}

export default function TechIcon({ href, icon, size }: Readonly<Props>) {
  const IconElm = determineIcon(icon);

  return (
    <a
      className={twMerge(
        "scale-75 animate-scale animate-duration-050 md:size-40",
        size === "large" ? "size-20" : "size-10"
      )}
      target="_blank"
      href={href}
    >
      <IconElm className="object-contain transition-all size-full hover:scale-110" />
    </a>
  );
}
