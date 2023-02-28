import Typewriter from "typewriter-effect";

const ProfileInfo = () => {
  return (
    <div className="h-full w-full mx-auto md:flex md:flex-col md:justify-center md:items-center">
      {/* profile info */}
      <div className="h-full flex flex-col-reverse">
        <img
          className="w-24 h-24 mx-auto my-8 border-4 border-white-500 rounded-full contain"
          src="/chick.png"
          alt="my logo"
        />
      </div>
      <div className="w-full h-full flex flex-col text-center">
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
          <div className="hover:cursor-pointer">
            <a
              href="https://www.facebook.com/chunting.fung.5/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-facebook-official"></i>
            </a>
          </div>
          <div className="hover:cursor-pointer">
            <a
              href="https://www.instagram.com/chuntingfung/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-instagram"></i>
            </a>
          </div>
          <div className="hover:cursor-pointer">
            <a
              href="https://github.com/johnfung95"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-evenly">
        <button>Download CV</button>
        <button>LinkedIn</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
