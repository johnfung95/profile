import { GoOrganization } from "react-icons/go";
import { HiQuestionMarkCircle } from "react-icons/hi2";
import { FaLightbulb } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { FaClock } from "react-icons/fa";
import { SiMinds } from "react-icons/si";

export const softskills = [
  {
    id: "comm",
    content: "Communication",
    pic: <GoOrganization />,
    css: "text-lg text-green-300",
  },
  {
    id: "problem_solving",
    content: "Problem-Solving",
    pic: <HiQuestionMarkCircle />,
    css: "text-xl text-purple-300",
  },
  {
    id: "creative",
    content: "Creativity",
    pic: <FaLightbulb />,
    css: "text-lg text-amber-300",
  },
  {
    id: "self_mot",
    content: "Self Motivation",
    pic: (
      <img
        alt="self_mot"
        src="./self_motivation.png"
        className="w-9 h-8 m-0 p-0"
      />
    ),
    css: "text-2xl text-blue-200",
  },
  {
    id: "attention",
    content: "Attention to Detail",
    pic: <TbListDetails />,
    css: "text-lg text-blue-200",
  },
  {
    id: "time",
    content: "Time Management",
    pic: <FaClock />,
    css: "text-lg text-red-200",
  },
  {
    id: "mind",
    content: "Open Minded",
    pic: <SiMinds />,
    css: "text-2xl text-yellow-200",
  },
];
