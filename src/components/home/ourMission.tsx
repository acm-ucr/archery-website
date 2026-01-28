interface MissionProps {
  title_our: string;
  title_mission: string;
}

const Mission = ({ title_our, title_mission }: MissionProps) => {
  return (
    <>
      <span className="text-center text-8xl font-black text-black">
        {title_our}
      </span>
      <div className="from-archery-yellow-300 from-25% to-archery-blue-400 to-75% bg-gradient-to-r bg-clip-text p-10 text-center text-8xl font-black text-transparent">
        {title_mission}
      </div>
    </>
  );
};

export default Mission;
