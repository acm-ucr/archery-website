import UpcomingEvents from "@/components/events/upcomingEvents";
import Header from "@/components/header";

const EventsPage = () => {
  return (
    <>
      <Header title="Events" />
      <UpcomingEvents
        day="Fri"
        date="07/04"
        title="Weekly Practice"
        startTime="2:00"
        endTime="5:45pm"
        location="Glen mor Fields"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et suscipit magna. Fusce vestibulum sed est pharetra hendrerit. Nam consectetur elit quis magna fermentum cursus non at sapien. Quisque et pharetra leo."
      />
    </>
  );
};

export default EventsPage;
