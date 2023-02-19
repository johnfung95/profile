import React from "react";
import ContentCard from "../UI/ContentCard";
import Header from "../UI/Header";
import Background from "../UI/Background";

const Contacts = () => {
  return (
    <React.Fragment>
      <Background />
      <Header />
      <ContentCard>
        <main className="flex items-center justify-auto">
          <section className="w-full">
            <ul className="text-left">
              <li className="mb-4 flex items-center">
                <p className="mr-4 text-2xl">Address: </p>
                <p className="text-lg">
                  Robinson Heights, Mid-Level, Hong Kong
                </p>
              </li>
              <li className="mb-4 flex items-center">
                <p className="mr-4 text-2xl">Email: </p>
                <p className="text-lg">johnfung95@yahoo.com</p>
              </li>
              <li className="mb-4 flex items-center">
                <p className="mr-4 text-2xl">Phone: </p>
                <p className="text-lg">+852 93596822</p>
              </li>
            </ul>
          </section>
          <section className="pl-32">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.876232817914!2d114.1511611150079!3d22.27949018533439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007af32f0e7d%3A0x3a1cf553041b6c06!2sRobinson%20Heights!5e1!3m2!1sen!2shk!4v1676795513373!5m2!1sen!2shk"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-96 h-96"
              title="address"
            ></iframe>
          </section>
        </main>
      </ContentCard>
    </React.Fragment>
  );
};

export default Contacts;
