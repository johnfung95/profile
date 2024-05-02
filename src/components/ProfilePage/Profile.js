import Typewriter from "typewriter-effect";
import ProfileBtns from "./ProfileBtns";
import ContactMeans from "./ContactMeans";

const Profile = () => {
  return (
    <div className="hidden h-2/5 w-full mx-0 md:border-2 md:border-zinc-800 md:block md:h-full md:flex md:flex-col md:justify-center md:items-center md:w-full">
      <div className="h-full flex flex-col-reverse">
        <img
          className="w-44 h-56 bg-slate-900 mx-auto border-none rounded-full contain enlarge md:my-8 hover:cursor-zoom-in"
          src="/profile-pic.png"
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
        <ProfileBtns />
        <ContactMeans />
      </div>
    </div>
  );
};

export default Profile;
