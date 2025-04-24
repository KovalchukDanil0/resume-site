import { Link } from "@remix-run/react";
import { FaAddressBook } from "react-icons/fa6";

export default function HomeIcon() {
  return (
    <Link to="/" className="mr-auto size-6" aria-label="Navigate to HomePage">
      <FaAddressBook
        aria-label="Address Book"
        href="/"
        className="mr-auto size-6 transition-transform hover:scale-110 hover:rotate-6"
      />
    </Link>
  );
}
