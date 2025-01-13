import { MetaFunction } from "@remix-run/node";
import { ReactElement } from "react";
import { Link } from "~/components";
import "./index.scss";

const resumeLink = "/pdf/my-resume.pdf";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact | Danylo Resume" },
    {
      property: "og:title",
      content: "Danylo Resume Contact Page",
    },
    {
      name: "description",
      content: "Don't hesitate to contact me",
    },
  ];
};

export default function ContactPage(): ReactElement {
  return (
    <div className="flex flex-col-reverse gap-5 md:flex-row">
      <div className="flex w-full flex-col gap-5 md:w-1/2">
        <h3>My Resume:</h3>
        <object
          className="h-96 md:h-[55rem]"
          type="application/pdf"
          data={resumeLink}
        >
          You browser doesn't support PDFs, however you can{" "}
          <Link to={resumeLink}>View Resume Here</Link>
        </object>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h3 className="mb-3">Contact Me:</h3>
          <p>
            <span>Gmail: </span>
            <Link to="mailto:danilkovalchuk0@gmail.com">
              danilkovalchuk0@gmail.com
            </Link>
          </p>
          <p>
            <span>Phone: </span>
            <Link to="tel:420792526408">+420792526408</Link>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="mb-3">My Social Networks:</h3>
          <p>
            <span>GutHub: </span>
            <Link to="https://github.com/KovalchukDanil0" target="_blank">
              https://github.com/KovalchukDanil0
            </Link>
          </p>
          <p>
            <span>LinkedIn: </span>
            <Link to="https://linkedin.com/in/danylo-kovalchuk" target="_blank">
              https://linkedin.com/in/danylo-kovalchuk
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
