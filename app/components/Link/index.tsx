import { LinkProps, Link as LinkRemix } from "@remix-run/react";
import { twMerge } from "tailwind-merge";

interface Props extends LinkProps {
  variant?: "default" | "button";
}

export default function Link({
  variant = "default",
  className,
  ...props
}: Readonly<Props>) {
  return (
    <LinkRemix
      {...props}
      className={twMerge(
        variant === "button"
          ? "button"
          : "w-fit cursor-pointer text-cyan-900 hover:underline dark:text-cyan-500",
        className,
      )}
    />
  );
}
