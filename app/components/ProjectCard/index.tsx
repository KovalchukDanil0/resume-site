import { ComponentProps, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button, Link } from "~/components";

export interface Props extends ComponentProps<"div"> {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt?: string;
  buttonOpenText?: string;
  buttonCloseText?: string;
  reverse?: boolean;
  href?: string;
}

export default function ProjectCard({
  reverse = false,
  buttonOpenText = "Open",
  buttonCloseText = "Close",
  imgSrc,
  imgAlt,
  description,
  title,
  className,
  children,
  href,
  ...props
}: Readonly<Props>) {
  const projectDescriptionRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  if (expanded) {
    projectDescriptionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  const displayDescription = children && buttonOpenText;

  const expandDescription = () => setExpanded(!expanded);

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
          "flex w-full flex-col-reverse bg-slate-400 dark:bg-gray-800 md:h-96",
          reverse
            ? "animate-appear-right md:flex-row-reverse"
            : "animate-appear-left md:flex-row",
          expanded ? "shadow-2xl" : "shadow-lg hover:shadow-2xl",
        )}
      >
        <div className="m-5 flex flex-col gap-3 md:mr-auto">
          <h2>{title}</h2>
          <h3>{description}</h3>

          {displayDescription && (
            <Button
              onClick={expandDescription}
              className="mt-auto"
              variant={expanded ? "arrowTurnUp" : "arrowTurnDown"}
            >
              {expanded ? buttonCloseText : buttonOpenText}
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
              "flex flex-col gap-5 bg-slate-300 p-10 transition-all duration-700 dark:bg-slate-900",
              expanded ? "mt-0" : "mt-[-115vh]",
            )}
          >
            {children}

            <div className="ml-0 mt-3 flex flex-col gap-3 md:ml-auto">
              {href && (
                <Link variant="button" to={href} target="_blank">
                  See GitHub
                </Link>
              )}

              <Button onClick={expandDescription} variant="arrowTurnUp" reverse>
                {buttonCloseText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
