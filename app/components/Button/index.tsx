import { useNavigate } from "@remix-run/react";
import { To } from "@remix-run/router";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type VariantType = "default" | "arrowLeft" | "arrowRight";
export interface Props extends ComponentProps<"button"> {
  href?: To;
  variant?: VariantType;
}

export default function Button({
  variant = "default",
  className,
  href,
  children,
  onClick,
  ...props
}: Readonly<Props>) {
  const navigate = useNavigate();

  return (
    <button
      onClick={href ? () => navigate(href) : onClick}
      className={twMerge(
        "w-fit rounded-3xl bg-cyan-800 px-10 py-2 font-bold text-white hover:bg-cyan-900 dark:bg-cyan-900 dark:hover:bg-cyan-800",
        className,
      )}
      {...props}
    >
      {variant === "arrowLeft" && "🡐 "}

      {children}

      {variant === "arrowRight" && " 🡒"}
    </button>
  );
}
