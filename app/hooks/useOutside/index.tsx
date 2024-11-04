import { RefObject, useEffect } from "react";

export default function useOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void,
  condition = true,
) {
  useEffect(() => {
    if (!condition) {
      return;
    }

    function handleClickOutside(event: MouseEvent) {
      if (!ref.current?.contains(event.target as T)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, condition]);
}
