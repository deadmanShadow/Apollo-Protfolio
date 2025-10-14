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

            <TimelineTitle className="text-xl">
              {item.isFresher ? "Fresher" : item.company}
            </TimelineTitle>

            {/* Only show dates if startDate exists and is not a fresher */}
            {!item.isFresher && item.startDate && (
              <TimelineDate>
                {format(new Date(item.startDate), "PP")} -{" "}
                {item.endDate
                  ? format(new Date(item.endDate), "PP")
                  : "Present"}
              </TimelineDate>
            )}

            <TimelineIndicator />
          </TimelineHeader>

          {/* Always show position */}
          <TimelineContent>{item.position}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
