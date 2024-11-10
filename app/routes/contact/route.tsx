import { Link } from "~/components";
import "./index.scss";

export default function ContactPage() {
  const resumeLinkElm = <Link href="/pdf/my-resume.pdf">View Resume</Link>;

  return (
    <div className="flex flex-col-reverse gap-5 md:flex-row">
      <div className="flex w-full flex-col gap-5 md:w-1/2">
        <h3>My Resume:</h3>
        <object
          className="h-[31rem] md:h-[55rem]"
          type="application/pdf"
          data="/pdf/my-resume.pdf"
        >
          {resumeLinkElm}
        </object>

        {resumeLinkElm}
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h3 className="mb-3">Contact Me:</h3>
          <p>
            <span>Gmail: </span>
            <Link href="mailto:danilkovalchuk0@gmail.com">
              danilkovalchuk0@gmail.com
            </Link>
          </p>
          <p>
            <span>Phone: </span>
            <Link href="tel:420792526408">+420792526408</Link>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="mb-3">My Social Networks:</h3>
          <p>
            <span>GutHub: </span>
            <Link href="https://github.com/KovalchukDanil0" target="_blank">
              https://github.com/KovalchukDanil0
            </Link>
          </p>
          <p>
            <span>LinkedIn: </span>
            <Link
              href="https://linkedin.com/in/danylo-kovalchuk"
              target="_blank"
            >
              https://linkedin.com/in/danylo-kovalchuk
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
