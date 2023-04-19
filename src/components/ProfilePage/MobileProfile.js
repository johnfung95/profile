import ProfileBtns from "./ProfileBtns";

const MobileProfile = () => {
  return (
    <div>
      <div className="my-4">
        <img
          className="w-36 h-36 bg-slate-900 mx-auto border-none rounded-full contain enlarge md:my-8"
          src="/profile-pic.png"
          alt="my logo"
        />
        <ProfileBtns />
      </div>
    </div>
  );
};

export default MobileProfile;
