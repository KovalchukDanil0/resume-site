import { useNavigate } from "@remix-run/react";
import { To } from "@remix-run/router";
import { ComponentProps } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowTurnDown,
  FaArrowTurnUp,
} from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

type VariantType =
  | "default"
  | "arrowLeft"
  | "arrowRight"
  | "arrowTurnUp"
  | "arrowTurnDown";
export interface Props extends ComponentProps<"button"> {
  href?: To;
  variant?: VariantType;
  reverse?: boolean;
}

function determineVariant(variant: VariantType) {
  let variantElm = <></>;

  switch (variant) {
    case "arrowLeft":
      variantElm = <FaArrowLeft />;
      break;
    case "arrowRight":
      variantElm = <FaArrowRight />;
      break;
    case "arrowTurnUp":
      variantElm = <FaArrowTurnUp />;
      break;
    case "arrowTurnDown":
      variantElm = <FaArrowTurnDown />;
      break;
    default:
      break;
  }

  return variantElm;
}

export default function Button({
  variant = "default",
  reverse = false,
  className,
  href,
  children,
  onClick,
  ...props
}: Readonly<Props>) {
  const navigate = useNavigate();

  const variantElm = determineVariant(variant);

  return (
    <button
      onClick={href ? () => navigate(href) : onClick}
      className={twMerge(
        "button flex w-fit flex-nowrap items-center gap-1",
        reverse ? "flex-row-reverse" : "flex-row",
        className,
      )}
      {...props}
    >
      <span>{children}</span>

      {variantElm}
    </button>
  );
}
