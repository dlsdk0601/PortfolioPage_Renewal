import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const useClickOutside = (
  ref: RefObject<HTMLDivElement>
): { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> } => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const hanldeClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        ref.current &&
        e.target instanceof HTMLDivElement &&
        !ref.current.contains(e.target as HTMLDivElement)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", hanldeClickOutside);

    return () => {
      document.removeEventListener("click", hanldeClickOutside);
    };
  }, [isOpen]);

  return { isOpen, setIsOpen };
};

export default useClickOutside;
