import { BiBook } from "react-icons/bi";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const MobileProfile = () => {
  return (
    <div>
      <div className="my-4">
        <img
          className="w-36 h-36 bg-slate-900 mx-auto border-none rounded-full contain enlarge md:my-8"
          src="/profile-pic.png"
          alt="my logo"
        />
        <div className="flex my-4 gap-5 justify-center">
          <div className="hover:cursor-pointer hover:text-orange-300">
            <a
              href="https://www.facebook.com/chunting.fung.5/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFacebook
                style={{ fontSize: "1.3rem" }}
              ></AiOutlineFacebook>
            </a>
          </div>
          <div className="hover:cursor-pointer hover:text-orange-300">
            <a
              href="https://www.instagram.com/chuntingfung/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram
                style={{ fontSize: "1.3rem" }}
              ></AiOutlineInstagram>
            </a>
          </div>
          <div className="hover:cursor-pointer hover:text-orange-300">
            <a
              href="https://github.com/johnfung95"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub style={{ fontSize: "1.3rem" }}></AiOutlineGithub>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-evenly py-4 border-y-2 border-y-zinc-800">
        <a
          href={process.env.REACT_APP_RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 items-center hover:cursor-pointer hover:text-orange-300"
        >
          <BiBook style={{ margin: "auto", fontSize: "1.3rem" }}></BiBook>
          <p>Resume</p>
        </a>
        <div className="hover:cursor-pointer hover:text-orange-300">
          <a
            href="https://www.linkedin.com/in/chun-ting-fung-ab3610145/"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 items-center"
          >
            <AiOutlineLinkedin
              style={{ margin: "auto", fontSize: "1.3rem" }}
            ></AiOutlineLinkedin>
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileProfile;
