import React, { useState, useContext } from "react";
import MenuList from "./MenuList";
import Modal from "../UI/Modal";
import MenuContext from "../../context/menucontext";

const Menus = () => {
  const ctx = useContext(MenuContext);

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
            clickPage={ctx.clickPage}
            currentPage={ctx.currentPage}
            closeModal={closeModalHandler}
          />
        )}
        <MenuList />
      </nav>
    </header>
  );
};

export default Menus;
