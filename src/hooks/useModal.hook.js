import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((st) => !st);
  };

  const setModalState = (newState = false) => {
    setIsOpen(newState);
  };

  return {
    isOpen,
    toggle,
    setModalState,
  };
};

export default useModal;
