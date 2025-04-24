import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"button">;

export default function Button({
  className,
  children,
  ...props
}: Readonly<Props>) {
  return (
    <button
      {...props}
      className={twMerge(
        "flex w-fit flex-row flex-nowrap items-center gap-1",
        className,
      )}
    >
      {children}
    </button>
  );
}
