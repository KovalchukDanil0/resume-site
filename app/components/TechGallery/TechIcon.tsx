import { Link, type LinkProps } from "@remix-run/react";
import type { FunctionComponent, SVGProps } from "react";
import { Theme, useTheme } from "remix-themes";
import { twMerge } from "tailwind-merge";

interface Props extends LinkProps {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export default function TechIcon({
  icon: Icon,
  ...restProps
}: Readonly<Props>) {
  const [theme] = useTheme();

  return (
    <Link
      {...restProps}
      className="animate-scale animate-duration-500 size-20 md:size-32 lg:size-40"
    >
      <Icon
        className={twMerge(
          "size-full object-contain text-green-700 transition-transform hover:scale-110",
          theme === Theme.DARK ? "text-white" : "text-black",
        )}
      />
    </Link>
  );
}
