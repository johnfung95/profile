import React from "react";
import MobileMenus from "../MenuPage/MobileMenus";

const Modal = ({ clickPage, currentPage, closeModal }) => {
  return (
    <div className="md:hidden">
      <div
        className="fixed h-full w-full bg-zinc-900 z-10 opacity-70"
        onClick={closeModal}
      ></div>
      <MobileMenus
        clickPage={clickPage}
        currentPage={currentPage}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Modal;
