import React from "react";
import MobileProfile from "../ProfilePage/MobileProfile";
import MenuList from "./MenuList";
import { ImCross } from "react-icons/im";

const MobileMenus = ({ clickPage, currentPage, closeModal }) => {
  const clsBtnHandler = () => {
    closeModal();
  };

  return (
    <div className="fixed w-3/4 h-full bg-slate-800 z-20 opacity-100 md:hidden">
      <div className="flex justify-end -mr-3">
        <div className="closeBtnContainer cursor-pointer ]">
          <ImCross
            onClick={clsBtnHandler}
            style={{
              height: "70%",
              width: "100%",
              margin: "0.2rem auto",
            }}
          ></ImCross>
        </div>
      </div>
      <MobileProfile />
      <MenuList
        clickPage={clickPage}
        currentPage={currentPage}
        mobile={true}
        closeModal={closeModal}
      />
    </div>
  );
};

export default MobileMenus;
