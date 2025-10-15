/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { format } from "date-fns";

export default function ExperienceTimeline({ data }: { data: any }) {
  return (
    <Timeline>
      {data.map((item: any) => (
        <TimelineItem key={item.id} step={item.id}>
          <TimelineHeader>
            <TimelineSeparator />

            <TimelineTitle className="text-xl">{item.company}</TimelineTitle>
            <TimelineDate>
              {format(new Date(item.startDate), "PP")} -{" "}
              {format(new Date(item.endDate), "PP")}
            </TimelineDate>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>{item.position}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
