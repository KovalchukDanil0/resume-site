import { FaArrowRight } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import Link, { type Props } from "~/components/Link";

export default function LinkNextPage({
  variant = "button",
  className,
  children,
  ...props
}: Readonly<Props>) {
  return (
    <Link
      {...props}
      variant={variant}
      className={twMerge(
        "sticky bottom-6 left-1/2 mt-5 flex -translate-1/2 items-center justify-center px-14 text-center md:px-48",
        className,
      )}
    >
      {children}
      <FaArrowRight />
    </Link>
  );
}
