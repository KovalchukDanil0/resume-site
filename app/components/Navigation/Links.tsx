import { useLocation } from "@remix-run/react";
import type { IconType } from "react-icons";
import { FaCircleInfo, FaFolderOpen, FaPhone } from "react-icons/fa6";
import { Link } from "~/components";

type UrlListType = {
  path: string;
  icon: IconType;
}[];

const urlList: UrlListType = [
  { path: "/about", icon: FaCircleInfo },
  { path: "/projects", icon: FaFolderOpen },
  { path: "/contact", icon: FaPhone },
];

export default function Links() {
  const { pathname } = useLocation();

  return urlList.map(
    ({ path, icon: Icon }) =>
      path !== pathname && (
        <Link className="size-5" key={path} to={path}>
          <Icon className="size-full" />
        </Link>
      ),
  );
}
