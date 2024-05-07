import { FcIphone } from "react-icons/fc";
import { SiMinutemailer } from "react-icons/si";

const ContactMeans = () => {
  return (
    <div className="w-full my-2 text-sm md:text-md">
      <div className="flex items-center justify-center text-ellipsis">
        <SiMinutemailer className="mr-2 text-xl" />
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
      </div>
      <div className="flex items-center justify-center">
        <FcIphone className="mr-2 text-xl" />
        <a
          href="https://web.whatsapp.com/send?phone=85293596822"
          target="_blank"
          rel="noreferrer"
          className="contact"
        >
          +852 93596822
        </a>
      </div>
    </div>
  );
};

export default ContactMeans;
