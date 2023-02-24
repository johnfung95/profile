import React from "react";
import ContentCard from "../UI/ContentCard";
import Header from "../UI/Header";
import ContactInfo from "./ContactInfo";

const Contacts = () => {
  return (
    <React.Fragment>
      <Header />
      <ContentCard>
        <ContactInfo />
      </ContentCard>
    </React.Fragment>
  );
};

export default Contacts;
