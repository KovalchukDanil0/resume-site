import type { MetaFunction } from "@remix-run/node";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa6";
import { useTheme } from "remix-themes";
import { Link } from "~/components";

const title = "Homepage" + import.meta.env.VITE_META_SITE;

export const meta: MetaFunction = () => [
  {
    content: title,
    property: "og:title",
  },
  {
    name: "description",
    content: "This resume site is the best",
  },
  { title },
];

export default function HomePage() {
  const [theme] = useTheme();

  return (
    <div className="flex flex-col items-center justify-around gap-8 md:flex-row md:gap-3">
      <div className="mx-0 flex flex-col gap-5 md:mx-10 xl:mx-48">
        <h1 className="animate-scale">
          <span className="animate-fade-in animate-delay-200 animate-cubic-bezier inline-block blur-sm">
            Danylo
          </span>
          &nbsp;
          <span className="animate-fade-in animate-delay-500 animate-cubic-bezier inline-block blur-sm">
            Kovalchuk
          </span>
        </h1>
        <p className="animate-fade-in animate-delay-200">
          Motivated and detail-oriented Full-Stack Developer with hands-on
          experience building dynamic Web Applications using React and SCSS for
          building responsible frontend layout and MongoDB/Supabase for scalable
          backend solutions.
        </p>
        <p className="animate-fade-in animate-delay-300">
          Proficient in containerization and deployment using Docker, ensuring
          efficient development environments and seamless application
          deployment.
        </p>
        <p className="animate-fade-in animate-delay-500">
          Strong problem-solving skills and a passion for learning new
          technologies. Eager to contribute to a collaborative team and develop
          innovative solutions in a fast-paced environment. Ready to tackle
          challenges and grow in the ever-evolving field of Web Development.
        </p>
        <Link
          className="animate-fade-in animate-delay-700"
          to="/about"
          variant="button"
        >
          About Me <FaArrowRight />
        </Link>

        <div className="animate-fade-in animate-delay-1000 mt-auto flex flex-row gap-4">
          <Link target="_blank" to={import.meta.env.VITE_GITHUB}>
            <FaGithub />
          </Link>

          <Link target="_blank" to={import.meta.env.VITE_LINKEDIN}>
            <FaLinkedin />
          </Link>
        </div>
      </div>

      <img
        className="place-self-center rounded-md object-cover sm:w-fit md:size-[40rem] md:object-[-40px] dark:object-center"
        alt={`Danylo Kovalchuk in ${theme} theme`}
        src={`img/author-${theme}.jpg`}
      />
    </div>
  );
}
