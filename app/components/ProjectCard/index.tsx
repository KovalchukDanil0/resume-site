import { ComponentProps, useRef } from "react";
import { twMerge } from "tailwind-merge";
import Button from "~/components/Button";
import "./index.scss";

interface Props extends ComponentProps<"div"> {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt?: string;
  buttonText?: string;
  direction?: "default" | "reverse";
}

export default function ProjectCard({
  direction = "default",
  imgSrc,
  imgAlt,
  description,
  title,
  buttonText,
  children,
  ...props
}: Readonly<Props>) {
  const projectDescriptionRef = useRef<HTMLDivElement>(null);

  const reverse = direction === "reverse";
  const displayDescription = children && buttonText;

  const projectDescriptionToggle = () =>
    projectDescriptionRef.current?.classList.toggle("hidden");

  return (
    <div
      {...props}
      className="scale-100 transition-all hover:my-10 hover:scale-105"
    >
      <div
        className={twMerge(
          "flex w-full flex-col-reverse bg-slate-400 shadow-lg dark:bg-gray-800 md:h-96",
          reverse
            ? "animate-appear-right md:flex-row-reverse"
            : "animate-appear-left md:flex-row",
        )}
      >
        <div className="m-5 flex flex-col gap-3 md:mr-auto">
          <h2>{title}</h2>
          <h3>{description}</h3>

          {displayDescription && (
            <Button onClick={projectDescriptionToggle} className="mt-auto">
              {buttonText}
            </Button>
          )}
        </div>

        <img
          className="size-full object-cover object-center md:w-1/2 md:object-[0,-80px]"
          alt={imgAlt}
          src={imgSrc}
        />
      </div>

      {displayDescription && (
        <div
          id="test"
          ref={projectDescriptionRef}
          className="hidden bg-slate-300 p-5 dark:bg-slate-800"
        >
          <div className="flex flex-col items-center justify-center gap-5 text-center">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
