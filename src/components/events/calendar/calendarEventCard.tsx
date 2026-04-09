import { Clock, MapPin } from "lucide-react";
import { format } from "date-fns";
import { CalendarEvent } from "./types";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";

export const CalendarEventCard = ({ event }: { event: CalendarEvent }) => (
  <Dialog modal={false}>
    <DialogTrigger className="cursor-pointer hover:opacity-75">
      <div className="bg-archery-blue-500 flex justify-between p-1 text-[6px] break-words text-white sm:p-2 md:text-[11px]">
        <p className="w-1/2 truncate">{event.title}</p>
        <div className="mt-0.5 flex items-center gap-1">
          <p>{format(event.start, "h:mm a")}</p>
        </div>
      </div>
    </DialogTrigger>
    <DialogOverlay className="fixed inset-0 bg-black/50" />
    <DialogContent className="fixed top-1/2 left-1/2 w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 sm:w-[80vw] md:w-[60vw] lg:w-[40vw]">
      <DialogTitle className="text-archery-blue-500 mb-4 text-2xl font-bold">
        {event.title}
      </DialogTitle>
      <div className="mb-4 flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Clock className="text-archery-blue-500 h-5 w-5" />
          <p>
            {format(event.start, "h:mm a")} – {format(event.end, "h:mm a")}
          </p>
        </div>
        {event.location && (
          <div className="flex items-center gap-1">
            <MapPin className="text-archery-blue-500 h-5 w-5" />
            <p>{event.location}</p>
          </div>
        )}
      </div>
      <p className="text-archery-grey-700">{event.description}</p>
    </DialogContent>
  </Dialog>
);
