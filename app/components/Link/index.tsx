import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"a">;

export default function Link({
  className,
  children,
  ...props
}: Readonly<Props>) {
  return (
    <a
      className={twMerge(
        "w-fit cursor-pointer text-cyan-900 hover:underline dark:text-cyan-500",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
