import { GiStoneCrafting, GiShuttlecock, GiCampingTent } from "react-icons/gi";
import { MdOutlineLocalMovies } from "react-icons/md";
import { FcReading } from "react-icons/fc";
import { BiTennisBall } from "react-icons/bi";
import { RiBilliardsFill } from "react-icons/ri";
import { FaHiking } from "react-icons/fa";
import { CgGym } from "react-icons/cg";

export const hobbies = [
  {
    id: "develop",
    content: "Development",
    pic: <GiStoneCrafting />,
    css: "text-2xl text-stone-100",
  },
  {
    id: "movies",
    content: "Movies",
    pic: <MdOutlineLocalMovies />,
    css: "text-2xl text-cyan-300",
  },
  {
    id: "read",
    content: "Reading",
    pic: <FcReading />,
    css: "text-2xl",
  },
  {
    id: "gym",
    content: "Gym",
    pic: <CgGym />,
    css: "text-2xl text-blue-400",
  },
  {
    id: "tennis",
    content: "Tennis",
    pic: <BiTennisBall />,
    css: "text-2xl text-green-400",
  },
  {
    id: "badminton",
    content: "Badminton",
    pic: <GiShuttlecock />,
    css: "text-2xl text-stone-100",
  },
  {
    id: "snooker",
    content: "Snooker",
    pic: <RiBilliardsFill />,
    css: "text-2xl",
  },
  {
    id: "hike",
    content: "Hiking",
    pic: <FaHiking />,
    css: "text-2xl text-emerald-500",
  },
  {
    id: "camp",
    content: "Camping",
    pic: <GiCampingTent />,
    css: "text-2xl text-rose-600",
  },
];
