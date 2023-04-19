import React, { useState } from "react";
import MenuList from "./MenuList";
import Modal from "../UI/Modal";

const Menus = ({ clickPage, currentPage }) => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <header className="md:p-2">
      <nav>
        <div className="flex justify-end items-end w-full fixed md:hidden">
          <div
            className="menuBarContainer cursor-pointer"
            onClick={openModalHandler}
          >
            <div className="menuBar"></div>
            <div className="menuBar"></div>
            <div className="menuBar"></div>
          </div>
        </div>
        {openModal && (
          <Modal
            clickPage={clickPage}
            currentPage={currentPage}
            closeModal={closeModalHandler}
          />
        )}
        <MenuList clickPage={clickPage} currentPage={currentPage} />
      </nav>
    </header>
  );
};

export default Menus;
