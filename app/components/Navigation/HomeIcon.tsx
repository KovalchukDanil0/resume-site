import { Link } from "@remix-run/react";
import { FaAddressBook } from "react-icons/fa6";

export default function HomeIcon() {
  return (
    <Link to="/" className="mr-auto size-6">
      <FaAddressBook className="size-full text-black transition-transform hover:rotate-6 hover:scale-110 dark:text-white" />
    </Link>
  );
}
