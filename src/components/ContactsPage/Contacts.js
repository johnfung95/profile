import React from "react";
import ContentCard from "../UI/ContentCard";
import ContactInfo from "./ContactInfo";

const Contacts = () => {
  return (
    <React.Fragment>
      <ContentCard>
        <ContactInfo />
      </ContentCard>
    </React.Fragment>
  );
};

export default Contacts;
