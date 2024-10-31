import { ComponentProps } from "react";
import "./index.scss";

export default function Loading(props: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className="absolute m-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
    >
      <div className="dot-falling" />
    </div>
  );
}
