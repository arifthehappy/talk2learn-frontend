import { useCallback, useState, useEffect, useRef } from "react";
import { database } from "./firebase";

// Custom hook to manage modal state
export function useModalState(defaultValue = false) {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, open, close };
}
