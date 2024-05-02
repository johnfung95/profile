import React, { useState } from "react";

const MenuContext = React.createContext({
  currentPage: "aboutme",
  clickPage: () => {},
});

export const MenuContextProvider = ({ children }) => {
  const [newPage, setNewPage] = useState("aboutme");

  const pageClickHandler = (newName) => {
    if (newName && newName !== "") {
      setNewPage(newName);
    }
  };

  return (
    <MenuContext.Provider
      value={{
        currentPage: newPage,
        clickPage: pageClickHandler,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
