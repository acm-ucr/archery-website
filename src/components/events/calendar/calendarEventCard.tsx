import { Clock, MapPin } from "lucide-react";
import { format } from "date-fns";
import { CalendarEvent } from "./types";

export const CalendarEventCard = ({ event }: { event: CalendarEvent }) => (
  <div className="bg-archery-blue-500 p-1 text-[6px] break-words text-white sm:p-2 md:text-[11px]">
    <p>{event.title}</p>
    <div className="mt-0.5 flex items-center gap-1">
      <Clock className="hidden h-2.5 w-2.5 sm:block" />
      <p>
        {format(event.start, "h:mm a")} – {format(event.end, "h:mm a")}
      </p>
    </div>
    {event.location && (
      <div className="mt-0.5 flex items-center gap-1">
        <MapPin className="hidden h-2.5 w-2.5 sm:block" />
        <p>{event.location}</p>
      </div>
    )}
  </div>
);
