import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import Button, { Props as ButtonProps } from "~/components/Button";

export default function ButtonNextPage({
  className,
  children,
  ...props
}: Readonly<ButtonProps>): ReactElement {
  return (
    <div
      className={twMerge(
        "mt-5 flex w-full items-center justify-center",
        className,
      )}
    >
      <Button {...props} variant="arrowRight" className="px-14 md:px-48">
        {children}
      </Button>
    </div>
  );
}
