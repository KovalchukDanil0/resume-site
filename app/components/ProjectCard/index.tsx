import { ComponentProps, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "~/components/Button";

interface Props extends ComponentProps<"div"> {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt?: string;
  buttonOpenText?: string;
  buttonCloseText?: string;
  direction?: "default" | "reverse";
}

export default function ProjectCard({
  direction = "default",
  buttonOpenText = "Open",
  buttonCloseText = "Close",
  imgSrc,
  imgAlt,
  description,
  title,
  className,
  children,
  ...props
}: Readonly<Props>) {
  const projectDescriptionRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  const reverse = direction === "reverse";
  const displayDescription = children && buttonOpenText;

  function expandDescription() {
    setExpanded(!expanded);
  }

  return (
    <div
      {...props}
      className={twMerge(
        "scale-100 transition-all",
        expanded ? "my-12 scale-105 md:my-20" : "hover:my-5 hover:scale-105",
        className,
      )}
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
            <Button onClick={expandDescription} className="mt-auto">
              {buttonOpenText}
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
        <div ref={projectDescriptionRef} className="overflow-hidden">
          <div
            className={twMerge(
              "flex flex-col items-center justify-center gap-5 bg-slate-300 p-5 text-center transition-all duration-1000 dark:bg-slate-800",
              expanded ? "mt-0" : "mt-[-200%] md:mt-[-100%]",
            )}
            onTransitionEnd={() =>
              expanded &&
              projectDescriptionRef.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            {children}

            <Button className="ml-auto" onClick={expandDescription}>
              {buttonCloseText}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
