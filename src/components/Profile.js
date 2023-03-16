import Typewriter from "typewriter-effect";
import { BiBook } from "react-icons/bi";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Profile = () => {
  return (
    <div className="h-2/5 w-full border-r-2 border-r-zinc-800 mx-0 md:h-full md:flex md:flex-col md:justify-center md:items-center md:max-w-md">
      <div className="h-full flex flex-col-reverse">
        <img
          className="w-24 h-24 mx-auto border-4 border-white-500 rounded-full contain md:my-8"
          src="/chick.png"
          alt="my logo"
        />
      </div>
      <div className="w-full flex flex-col text-center md:h-full ">
        <div className="m-2">
          <p className="text-3xl italic">John Fung</p>
        </div>
        <div className="m-4">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Programmer...")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Software Developer~")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Tech Enthusiast!")
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
            options={{ autoStart: true, loop: true }}
          />
        </div>
        <div className="flex my-2 gap-5 justify-center">
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
        <div className="flex gap-2 items-center hover:cursor-pointer hover:text-orange-300">
          <BiBook style={{ margin: "auto", fontSize: "1.3rem" }}></BiBook>
          <p>Resume</p>
        </div>
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

export default Profile;
