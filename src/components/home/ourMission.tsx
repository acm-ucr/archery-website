interface MissionProps {
  title_our: string;
  title_mission: string;
}

const Mission = ({ title_our, title_mission }: MissionProps) => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 p-8">
      <h2 className="flex flex-row gap-6 text-center text-6xl font-black">
        <span className="text-black">{title_our}</span>

        <span className="from-archery-yellow-300 to-archery-blue-400 bg-gradient-to-r from-25% to-75% bg-clip-text text-transparent">
          {title_mission}
        </span>
      </h2>

      <div className="max-w-4xl text-center text-lg font-normal text-black">
        <p>
          <span className="font-bold text-blue-800">UCR Archery Club</span>{" "}
          strives to teach those of various skill levels the fundamentals of
          archery and grow their skills overtime. We train our archers to also
          become familiar with equipment, target shooting, and competitive
          skills. Our hope is to prepare UCR students to be competitive in
          regional and national tournaments in the coming school years and set
          goals for personal discipline within and outside of the sport.
        </p>
      </div>
    </section>
  );
};

export default Mission;
