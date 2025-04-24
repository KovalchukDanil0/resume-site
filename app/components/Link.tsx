import { type LinkProps, Link as LinkRemix } from "@remix-run/react";
import { twMerge } from "tailwind-merge";

export interface Props extends LinkProps {
  variant?: "button";
}

export default function Link({
  variant,
  className,
  ...props
}: Readonly<Props>) {
  return (
    <LinkRemix
      {...props}
      className={twMerge(
        "inline-flex w-fit flex-row items-center gap-2",
        variant === "button"
          ? "rounded-3xl bg-cyan-800 px-10 py-2 font-bold transition-transform hover:scale-105 hover:bg-cyan-900 dark:bg-cyan-900 dark:hover:bg-cyan-800 [&>svg]:text-white"
          : "text-cyan-900 hover:underline dark:text-cyan-500",
        className,
      )}
    />
  );
}
