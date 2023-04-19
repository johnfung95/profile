import { FcAddressBook, FcIphone } from "react-icons/fc";
import { SiMinutemailer } from "react-icons/si";

const ContactMeans = () => {
  return (
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
  );
};

export default ContactMeans;
