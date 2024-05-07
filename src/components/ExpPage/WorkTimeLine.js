import React, { useState, useEffect } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { fetchWorkRecords } from "../../utils/firebase";

const WorkTimeLine = () => {
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    const getRecs = async () => {
      const data = await fetchWorkRecords();
      console.log(data);
      setWorkData(data);
    };

    getRecs();
  }, []);

  return (
    <Timeline>
      {workData.map((item) => {
        return (
          <TimelineItem key={`${item.fromyear}_${item.toyear}`}>
            <TimelineOppositeContent color="primary">
              {item.fromyear} - {item.toyear}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div>
                <img
                  src={item.img}
                  className="h-16 w-28 md:mr-0 md:w-36 md:h-20 md:-mr-12"
                  alt={item.company}
                />
                <p className="bold text-md">
                  {item.company} {item.secon && ` - ${item.secon_company}`}
                </p>
                <p className="text-sm italic">({item.title})</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

export default WorkTimeLine;
