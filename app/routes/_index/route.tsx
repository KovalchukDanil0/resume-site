import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "remix-themes";
import { twMerge } from "tailwind-merge";
import "./index.scss";

export default function HomePage() {
  const [theme] = useTheme();

  return (
    <div className="m-5 flex flex-col-reverse items-center justify-around gap-3 md:m-12 md:flex-row">
      <div className="mt-5 flex min-h-72 flex-col gap-5 md:mx-48 md:mt-0">
        <h1 id="author-name">
          <span>Danylo</span> <span>Kovalchuk</span>
        </h1>
        <p className="animate-fade-in opacity-0 animate-delay-300">
          Motivated and detail-oriented entry-level Full-Stack Developer with
          hands-on experience building dynamic Web Applications using React and
          SCSS for building responsible frontend layout and MongoDB/Supabase for
          scalable backend solutions.
        </p>

        <p className="animate-fade-in opacity-0 animate-delay-500">
          Proficient in containerization and deployment using Docker, ensuring
          efficient development environments and seamless application
          deployment.
        </p>

        <p className="animate-fade-in opacity-0 animate-delay-700">
          Strong problem-solving skills and a passion for learning new
          technologies. Eager to contribute to a collaborative team and develop
          innovative solutions in a fast-paced environment. Ready to tackle
          challenges and grow in the ever-evolving field of Web Development.
        </p>

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
        className="size-96 place-self-center rounded-md object-cover object-left dark:object-center md:size-[40rem]"
        alt="There should be me"
        src={`images/author-${theme}.jpg`}
      />
    </div>
  );
}
