import { useNavigate } from "@remix-run/react";
import { To } from "@remix-run/router";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"button"> {
  href?: To;
}

export default function Link({
  className,
  href,
  children,
  ...props
}: Readonly<Props>) {
  const navigate = useNavigate();

  return (
    <button
      onClick={href ? () => navigate(href) : undefined}
      className={twMerge(
        "flex w-fit cursor-pointer flex-row items-center text-cyan-900 hover:underline dark:text-cyan-500",
        className,
      )}
      {...props}
    >
      {children} ➝
    </button>
  );
}
