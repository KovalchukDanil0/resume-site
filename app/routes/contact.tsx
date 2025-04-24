import type { MetaFunction } from "@remix-run/node";
import { Link } from "~/components";
import { email, github, linkedIn, metaSite, phone } from "~/lib/info";

//TODO: Replace static pdf with dynamic pdf generation
const resumeLink = "/pdf/my-resume.pdf";

const title = "Contact" + metaSite;

export const meta: MetaFunction = () => [
  {
    content: title,
    property: "og:title",
  },
  {
    name: "description",
    content: "Don't hesitate to contact me",
  },
  { title },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col-reverse gap-5 md:flex-row">
      <div className="flex w-full flex-col gap-5 md:w-1/2">
        <h3>My Resume:</h3>

        <embed src={resumeLink} className="h-96 md:h-[55rem]" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h3 className="mb-3">Contact Me:</h3>
          <p>
            <span>Gmail: </span>
            <Link to={`mailto:${email}`}>{email}</Link>
          </p>
          <p>
            <span>Phone: </span>
            <Link to={`tel:${phone.replaceAll(" ", "")}`}>{phone}</Link>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="mb-3">My Social Networks:</h3>
          <p>
            <span>GutHub: </span>
            <Link to={github} target="_blank">
              {github}
            </Link>
          </p>
          <p>
            <span>LinkedIn: </span>
            <Link to={linkedIn} target="_blank">
              {linkedIn}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
