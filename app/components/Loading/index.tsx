import { ComponentProps } from "react";
import "./index.scss";

type Props = ComponentProps<"div">;

export default function Loading(props: Readonly<Props>) {
  return (
    <div
      {...props}
      className="absolute left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="dot-falling" />
    </div>
  );
}
