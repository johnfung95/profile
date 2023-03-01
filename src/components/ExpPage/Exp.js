import React from "react";
import { Timeline } from "@mui/lab";
import { TimelineItem } from "@mui/lab";
import { TimelineSeparator } from "@mui/lab";
import { TimelineConnector } from "@mui/lab";
import { TimelineContent } from "@mui/lab";
import { TimelineOppositeContent } from "@mui/lab";
import { TimelineDot } from "@mui/lab";
import { Typography } from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
const dummyData = [
  {
    year: "2017",
    company: "Company",
    title: "Good Programmer",
    description: "Fucked up!!!!!",
    icon: null,
  },
  {
    year: "2016",
    company: "Company",
    title: "Good Programmer",
    description: "Fucked up!!!!!",
    icon: null,
  },
  {
    year: "2015",
    company: "Company",
    title: "Good Programmer",
    description: "Fucked up!!!!!",
    icon: null,
  },

  {
    year: "2014",
    company: "Company",
    title: "Good Programmer",
    description: "Fucked up!!!!!",
    icon: <HotelIcon />,
  },
];
const Exp = () => {
  return (
    <div className="relative">
      <Timeline position="alternate" sx={{ justifyContent: "center" }}>
        {dummyData.map((data) => {
          return (
            <TimelineItem
              sx={{
                height: "10rem",
                "@media screen and (max-width: 32rem)": {
                  height: "7rem",
                },
              }}
            >
              <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body1">
                {data.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  {data.icon === null ? <LaptopMacIcon /> : data.icon}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ px: 1.4, m: "auto 0" }}>
                <Typography variant="h6" component="span">
                  {data.company}
                </Typography>
                <Typography>{data.title}</Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
};

export default Exp;
