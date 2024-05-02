import ProfileBtns from "./ProfileBtns";
import ContactMeans from "./ContactMeans";

const MobileProfile = () => {
  return (
    <div>
      <div className="my-4">
        <img
          className="w-32 h-44 bg-slate-900 mx-auto border-none rounded-full contain enlarge md:my-8"
          src="/profile-pic.png"
          alt="my logo"
        />
        <ProfileBtns />
        <ContactMeans />
        <div className="w-full flex justify-evenly pt-2 border-t-2 border-y-zinc-800"></div>
      </div>
    </div>
  );
};

export default MobileProfile;
