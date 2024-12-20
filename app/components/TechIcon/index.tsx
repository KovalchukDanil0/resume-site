import { ComponentProps, ReactElement } from "react";
import { Theme, useTheme } from "remix-themes";
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
  SvgProps,
  TailwindCssSvg,
  TypeScriptSvg,
  ViteSvg,
  WebpackSvg,
} from "~/components/Svg";

interface Props extends ComponentProps<"a"> {
  icon: IconProps;
  size?: "default" | "large" | "small";
}

export type IconProps =
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

type IconElmProps = (props: SvgProps) => ReactElement;

function determineIcon(icon: IconProps): IconElmProps {
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

export default function TechIcon({
  size = "default",
  href,
  icon,
}: Readonly<Props>): ReactElement {
  const IconElm = determineIcon(icon);
  const [theme] = useTheme();

  return (
    <a
      className={twMerge(
        "scale-75 animate-scale animate-duration-500",
        size === "large"
          ? "size-20 md:size-32 lg:size-40"
          : "size-10 md:size-14 lg:size-20",
      )}
      target="_blank"
      href={href}
    >
      <IconElm
        className={twMerge(
          "size-full object-contain text-green-700 transition-transform hover:scale-110",
          theme === Theme.DARK ? "text-white" : "text-black",
        )}
      />
    </a>
  );
}
