import { useLocation } from "@remix-run/react";
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

export default function SecondaryNavigation() {
  const { pathname } = useLocation();

  return (
    <>
      {urlList.map(({ path, text }) => {
        if (path === pathname) {
          return <></>;
        }

        return (
          <Link key={path} to={path}>
            {text}
          </Link>
        );
      })}
    </>
  );
}
