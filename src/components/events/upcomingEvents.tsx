interface Events {
    day : string;
    date : string;
    title : string;
    startTime : string;
    endTime : string;
    location : string;
    description : string;       

}
const UpcomingEvents = ({day, date, title, startTime, endTime, location, description}: Events) => {
  return (
    <div className="flex gap-4 ">
        <div className="flex flex-col items-center justify-center">
          <p className="text-archery-blue-500 text-bold text-4xl">{day}</p>
          <p className="text-archery-blue-500 text-bold text-4xl">{date}</p>
        </div>
        <div className="flex flex-col">
          <div className="h-5 w-full"/>
          <p className="text-archery-blue-500 text-2xl font-bold">{title}</p>
          <div className="flex gap-2">
            <p className="text-archery-blue-500 font-bold text-lg">{startTime} - {endTime}</p>
            <p className="text-archery-blue-500 font-bold text-lg">{location}</p>  
          </div>
          <p className="text-archery-blue-500 text-lg">{description}</p>
          <div className="h-5 w-full"/>
        </div>
    </div>
  )
}

export default UpcomingEvents