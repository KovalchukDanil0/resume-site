import { SyntheticEvent } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import myPhoto from "~/assets/me.jpg";

const imageAppear = ({
  currentTarget: { classList },
}: SyntheticEvent<HTMLImageElement>) => classList.add("animate-in", "zoom-in");

export default function HomePage() {
  return (
    <div className="m-5 flex flex-col-reverse items-center justify-around gap-3 md:m-12 md:flex-row">
      <div className="mt-5 flex min-h-72 flex-col gap-5 md:mx-48 md:mt-0">
        <h1 className="delay-100 animate-in fade-in fill-mode-both">
          Danylo Kovalchuk
        </h1>
        <p className="delay-300 animate-in fade-in fill-mode-both">
          Motivated and detail-oriented entry-level Full-Stack Developer with
          hands-on experience building dynamic Web Applications using React and
          SCSS for building responsible frontend layout and MongoDB/Supabase for
          scalable backend solutions.
        </p>

        <p className="delay-500 animate-in fade-in fill-mode-both">
          Proficient in containerization and deployment using Docker, ensuring
          efficient development environments and seamless application
          deployment.
        </p>

        <p className="delay-700 animate-in fade-in fill-mode-both">
          Strong problem-solving skills and a passion for learning new
          technologies. Eager to contribute to a collaborative team and develop
          innovative solutions in a fast-paced environment. Ready to tackle
          challenges and grow in the ever-evolving field of Web Development.
        </p>

        <div className="mt-auto flex flex-row gap-4 text-black delay-1000 animate-in fade-in fill-mode-both dark:text-white">
          <a target="_blank" href="https://github.com/KovalchukDanil0">
            <FaGithub />
          </a>

          <a target="_blank" href="https://linkedin.com/in/danylo-kovalchuk">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <img
        onLoad={imageAppear}
        className="size-96 place-self-center rounded-md object-cover object-center fade-in md:size-[40rem]"
        alt="There should be me"
        src={myPhoto}
      />
    </div>
  );
}
