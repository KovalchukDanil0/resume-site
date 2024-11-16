import { useNavigate } from "@remix-run/react";
import { To } from "@remix-run/router";
import { ComponentProps, ReactElement } from "react";
import { IconType } from "react-icons";
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

function determineVariant(variant: VariantType): IconType {
  let variantElm: IconType | null = null;

  switch (variant) {
    case "arrowLeft":
      variantElm = FaArrowLeft;
      break;
    case "arrowRight":
      variantElm = FaArrowRight;
      break;
    case "arrowTurnUp":
      variantElm = FaArrowTurnUp;
      break;
    case "arrowTurnDown":
      variantElm = FaArrowTurnDown;
      break;
    default:
      throw new Error(`Specified button type "${variant}" does not exist`);
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
}: Readonly<Props>): ReactElement {
  const navigate = useNavigate();

  const ButtonElm = determineVariant(variant);

  return (
    <button
      onClick={href ? () => navigate(href) : onClick}
      className={twMerge(
        "group button flex w-fit flex-nowrap items-center gap-1",
        reverse ? "flex-row-reverse" : "flex-row",
        className,
      )}
      {...props}
    >
      <span>{children}</span>

      <ButtonElm
        className={twMerge(
          "text-white",
          (variant === "arrowLeft" || variant === "arrowRight") &&
            "transition-transform group-hover:translate-x-1/2",
        )}
      />
    </button>
  );
}
