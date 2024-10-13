import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "remix-themes";
import { twMerge } from "tailwind-merge";
import Link from "~/components/Link";
import "./index.scss";

export default function HomePage() {
  const [theme] = useTheme();

  return (
    <div className="flex flex-col-reverse items-center justify-around gap-8 md:flex-row md:gap-3">
      <div className="mx-0 flex flex-col gap-5 md:mx-10 xl:mx-48">
        <h1 className="scale-90 animate-scale">
          <span className="inline-block animate-fade-in opacity-0 blur-sm animate-delay-200 animate-cubic-bezier">
            Danylo
          </span>
          &nbsp;
          <span className="inline-block animate-fade-in opacity-0 blur-sm animate-delay-500 animate-cubic-bezier">
            Kovalchuk
          </span>
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
        className="place-self-center rounded-md object-cover dark:object-center sm:w-fit md:size-[40rem] md:object-[-40px]"
        alt={`Danylo Kovalchuk in ${theme} theme`}
        src={`images/author-${theme}.jpg`}
      />
    </div>
  );
}
