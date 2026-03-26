"use client";

import UpcomingEvents from "@/components/events/upcomingEvents";
import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isToday,
  isSameDay,
  isAfter,
  startOfDay,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarEventCard } from "./calendarEventCard";
import { CalendarEvent } from "./types";
import { useQuery } from "@tanstack/react-query";

interface GoogleCalendarEvent {
  id: string;
  summary?: string;
  location?: string;
  description?: string;
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const { data: events = [] } = useQuery({
    queryKey: ["calendarEvents", format(currentDate, "yyyy-MM")],
    queryFn: async (): Promise<CalendarEvent[]> => {
      const monthStart = startOfMonth(currentDate);
      const monthEnd = endOfMonth(monthStart);
      const start = startOfWeek(monthStart);
      const end = endOfWeek(monthEnd);

      const url = new URL(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL!}/events`,
      );
      url.searchParams.set(
        "key",
        process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY!,
      );
      url.searchParams.set("timeMin", start.toISOString());
      url.searchParams.set("timeMax", end.toISOString());
      url.searchParams.set("singleEvents", "true");
      url.searchParams.set("orderBy", "startTime");

      const res = await fetch(url.toString());
      const data = await res.json();

      return (data.items || []).map((item: GoogleCalendarEvent) => ({
        id: item.id,
        title: item.summary || "No Title",
        start: new Date(item.start.dateTime || item.start.date!),
        end: new Date(item.end.dateTime || item.end.date!),
        location: item.location,
        description: item.description,
      }));
    },
  });

  const upcomingEvents = events
    .filter(
      (e) =>
        isAfter(e.start, startOfDay(new Date())) ||
        isSameDay(e.start, new Date()),
    )
    .sort((a, b) => a.start.getTime() - b.start.getTime())
    .slice(0, 3);

  const getEventsForDay = (day: Date) =>
    events.filter((e) => isSameDay(e.start, day));

  return (
    <div className="mx-auto w-11/12 max-w-7xl p-3 sm:p-6">
      <UpcomingEvents events={upcomingEvents} />
      <div className="mb-6 flex items-center justify-center sm:hidden">
        <Button
          variant="ghost"
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
          className="px-2"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </Button>
        <div className="text-archery-blue-500 text-2xl font-bold">
          {format(currentDate, "MMMM yyyy")}
        </div>
        <Button
          variant="ghost"
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
          className="px-2"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </Button>
      </div>

      <div className="mb-8 hidden items-center justify-between sm:flex">
        <div className="flex items-center gap-4">
          <div className="text-archery-blue-500 text-4xl font-bold">
            {format(currentDate, "MMMM yyyy")}
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              onClick={() => setCurrentDate(subMonths(currentDate, 1))}
              className="px-3"
            >
              <ChevronLeft className="h-7 w-7 text-gray-600" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => setCurrentDate(addMonths(currentDate, 1))}
              className="px-3"
            >
              <ChevronRight className="h-7 w-7 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-archery-blue-200 mb-4 grid grid-cols-7 rounded-4xl">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-archery-blue-500 py-3 text-center font-bold"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="border-archery-blue-500 overflow-hidden rounded-lg border shadow-sm">
        <div className="grid grid-cols-7">
          {calendarDays.map((day, idx) => (
            <div
              key={idx}
              className={cn(
                "border-archery-blue-500 hide-scrollbar h-[140px] overflow-y-auto border-r border-b transition-colors",
                (idx + 1) % 7 === 0 && "border-r-0",
                idx >= calendarDays.length - 7 && "border-b-0",
                !isSameMonth(day, monthStart) && "bg-archery-grey-200/15",
                isToday(day) && "bg-archery-blue-100",
              )}
            >
              <span
                className={cn(
                  "ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-semibold sm:text-sm",
                  isSameMonth(day, monthStart)
                    ? "text-archery-blue-500"
                    : "text-gray-500",
                )}
              >
                {format(day, "d")}
              </span>
              <div className="flex flex-col gap-1">
                {getEventsForDay(day).map((event) => (
                  <CalendarEventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
