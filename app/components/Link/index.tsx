import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"a"> {
  variant?: "common" | "arrow";
}

export default function Link({
  variant = "common",
  className,
  children,
  ...props
}: Readonly<Props>) {
  return (
    <a
      className={twMerge(
        "w-fit text-cyan-700 hover:underline dark:text-cyan-500",
        variant === "arrow" && "flex flex-row items-center",

        className,
      )}
      {...props}
    >
      {children} {variant === "arrow" && "➝"}
    </a>
  );
}
