import React from "react";
import SlideAnimate from "../UI/SlideAnimate";
import ContactMeans from "./ContactMeans";

const Contacts = () => {
  return (
    <SlideAnimate>
      <div className="h-screen w-full flex flex-col justify-center items-center md:block md:h-full md:overflow-y-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.876232817914!2d114.1511611150079!3d22.27949018533439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007af32f0e7d%3A0x3a1cf553041b6c06!2sRobinson%20Heights!5e1!3m2!1sen!2shk!4v1676795513373!5m2!1sen!2shk"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-96 w-full "
          title="address"
        ></iframe>
        <ContactMeans />
      </div>
    </SlideAnimate>
  );
};

export default Contacts;
