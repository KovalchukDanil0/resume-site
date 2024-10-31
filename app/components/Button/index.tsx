import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export default function Link({
  className,
  children,
  ...props
}: Readonly<ComponentProps<"a">>) {
  return (
    <a
      className={twMerge(
        "w-fit cursor-pointer text-cyan-900 hover:underline dark:text-cyan-500 flex flex-row items-center",
        className
      )}
      {...props}
    >
      {children} ➝
    </a>
  );
}
