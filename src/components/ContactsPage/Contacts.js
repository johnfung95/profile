import React from "react";
import ContentCard from "../UI/ContentCard";
import Header from "../UI/Header";
import Background from "../UI/Background";
import ContactInfo from "./ContactInfo";

const Contacts = () => {
  return (
    <React.Fragment>
      <Background />
      <Header />
      <ContentCard>
        <ContactInfo />
      </ContentCard>
    </React.Fragment>
  );
};

export default Contacts;
