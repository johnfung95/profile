import React from "react";
import { FcAddressBook, FcIphone } from "react-icons/fc";
import { SiMinutemailer } from "react-icons/si";

const Contacts = () => {
  return (
    <div className="w-full h-full flex flex-col-reverse content-center justify-center">
      <section>
        <ul className="text-left text-sm md:text-lg">
          <li className="flex text-sm items-center text-ellipsis m-4 md:text-lg mb-4">
            <FcAddressBook className="mr-4 text-2xl" />
            <p>Robinson Heights, Mid-Level, Hong Kong</p>
          </li>
          <li className="flex text-sm items-center text-ellipsis m-4 md:text-lg mb-4">
            <SiMinutemailer className="mr-4 text-2xl" />
            <p>
              <a
                href="mailto:johnfung95@yahoo.com"
                target="_blank"
                rel="noreferrer"
                className="contact"
              >
                johnfung95@yahoo.com
              </a>
            </p>
          </li>
          <li className="flex text-sm items-center m-4 md:text-lg mb-4">
            <FcIphone className="mr-4 text-2xl" />
            <a
              href="https://web.whatsapp.com/send?phone=85293596822"
              target="_blank"
              rel="noreferrer"
              className="contact"
            >
              +852 93596822
            </a>
          </li>
        </ul>
      </section>
      <section className="md:w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.876232817914!2d114.1511611150079!3d22.27949018533439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007af32f0e7d%3A0x3a1cf553041b6c06!2sRobinson%20Heights!5e1!3m2!1sen!2shk!4v1676795513373!5m2!1sen!2shk"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="m-auto px-8 w-full h-64 md:w-full md:h-96"
          title="address"
        ></iframe>
      </section>
    </div>
  );
};

export default Contacts;
