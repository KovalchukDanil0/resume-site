import { type RefObject, useCallback, useEffect } from "react";

export default function useOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void,
  condition = true,
) {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as T)) {
        callback();
      }
    },
    [ref, callback],
  );

  useEffect(() => {
    if (!condition) {
      return;
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, condition, handleClickOutside]);
}
