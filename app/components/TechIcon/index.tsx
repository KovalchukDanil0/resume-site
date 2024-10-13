import { ComponentProps, ReactElement } from "react";
import CssSvg from "./CssSvg";
import DockerSvg from "./DockerSvg";
import HtmlSvg from "./HtmlSvg";
import JavaScriptSvg from "./JavaScriptSvg";
import MdxSvg from "./MdxSvg";
import MongoDBSvg from "./MongoDBSvg";
import MySqlSvg from "./MySqlSvg";
import NextJsSvg from "./NextJsSvg";
import NodeJsSvg from "./NodeJsSvg";
import NpmSvg from "./NpmSvg";
import PostgreSqlSvg from "./PostgreSqlSvg";
import ReactSvg from "./ReactSvg";
import RollupSvg from "./RollupSvg";
import SassSvg from "./SassSvg";
import TailwindCssSvg from "./TailwindCssSvg";
import TypeScriptSvg from "./TypeScriptSvg";
import ViteSvg from "./ViteSvg";
import WebpackSvg from "./WebpackSvg";

export type DynamicElementProps = ComponentProps<"svg">;

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
};

// Make link pointing to project not site wiki

export default function TechIcon({ href, icon }: Readonly<Props>) {
  let IconElm: (props: DynamicElementProps) => ReactElement;

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

  return (
    <a
      className="size-20 scale-75 animate-scale animate-duration-050 md:size-40"
      target="_blank"
      href={href}
    >
      <IconElm className="size-full object-contain transition-all hover:scale-110" />
    </a>
  );
}
