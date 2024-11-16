import { useLocation } from "@remix-run/react";
import { ReactElement } from "react";
import { Link } from "~/components";

type UrlListType = {
  path: string;
  text: string;
}[];

const urlList: UrlListType = [
  { path: "/about", text: "About" },
  { path: "/projects", text: "Projects" },
  { path: "/contact", text: "Contact" },
];

export default function SecondaryNavigation(): ReactElement {
  const { pathname } = useLocation();

  return (
    <>
      {urlList.map(({ path, text }) => {
        if (path === pathname) {
          return null;
        }

        return (
          <Link key={text} to={path}>
            {text}
          </Link>
        );
      })}
    </>
  );
}
