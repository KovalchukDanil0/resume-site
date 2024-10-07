import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "remix-themes";
import { twMerge } from "tailwind-merge";
import Link from "~/components/Link";

const fullName = ["Danylo", "Kovalchuk"];

export default function HomePage() {
  const [theme] = useTheme();

  return (
    <div className="m-5 flex flex-col-reverse items-center justify-around gap-3 md:m-12 md:flex-row">
      <div className="mx-0 mt-5 flex min-h-72 flex-col gap-5 md:mx-48 md:mt-0">
        <h1 className="scale-90 animate-scale">
          {fullName.map((part, idx) => (
            <>
              <span
                key={part}
                style={{ animationDelay: `${idx * 250}ms` }}
                className="inline-block animate-fade-in opacity-0 blur-sm animate-cubic-bezier"
              >
                {part}
              </span>{" "}
            </>
          ))}
        </h1>
        <p className="animate-fade-in opacity-0 animate-delay-200">
          Motivated and detail-oriented Full-Stack Developer with hands-on
          experience building dynamic Web Applications using React and SCSS for
          building responsible frontend layout and MongoDB/Supabase for scalable
          backend solutions.
        </p>

        <p className="animate-fade-in opacity-0 animate-delay-300">
          Proficient in containerization and deployment using Docker, ensuring
          efficient development environments and seamless application
          deployment.
        </p>

        <p className="animate-fade-in opacity-0 animate-delay-500">
          Strong problem-solving skills and a passion for learning new
          technologies. Eager to contribute to a collaborative team and develop
          innovative solutions in a fast-paced environment. Ready to tackle
          challenges and grow in the ever-evolving field of Web Development.
        </p>

        <Link
          variant="arrow"
          className="animate-fade-in opacity-0 animate-delay-700"
          href="about"
        >
          About Me
        </Link>

        <div
          className={twMerge(
            "mt-auto flex flex-row gap-4 text-black dark:text-white",
            "animate-fade-in opacity-0 animate-delay-1000",
          )}
        >
          <a target="_blank" href="https://github.com/KovalchukDanil0">
            <FaGithub />
          </a>

          <a target="_blank" href="https://linkedin.com/in/danylo-kovalchuk">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <img
        id="author-image"
        className={twMerge(
          "size-96 place-self-center rounded-md object-cover object-[-40px] dark:object-center md:size-[40rem] md:object-left",
        )}
        alt={`Danylo Kovalchuk in ${theme} theme`}
        src={`images/author-${theme}.jpg`}
      />
    </div>
  );
}
