import EventCard from "./eventcard";
import { CalendarEvent } from "./calendar/types";
import { format } from "date-fns";

interface UpcomingEventsProps {
  events: CalendarEvent[];
}

const UpcomingEvents = ({ events }: UpcomingEventsProps) => {
  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <div className="to-archery-blue-200 text-archery-blue-500 w-full rounded-full bg-gradient-to-r from-white from-0% to-100% text-left text-4xl font-bold">
        Upcoming Events
      </div>
      <div className="flex flex-col gap-8 py-10">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard
              key={event.id}
              day={format(event.start, "EEE").toUpperCase()}
              date={format(event.start, "d")}
              title={event.title}
              startTime={format(event.start, "h:mm a")}
              endTime={format(event.end, "h:mm a")}
              location={event.location || ""}
              description={event.description || ""}
            />
          ))
        ) : (
          <p className="text-archery-blue-500 text-2xl sm:text-4xl md:text-6xl">
            No upcoming events.
          </p>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
