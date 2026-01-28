
interface MissionProps {
    title: string;
}

const Mission = ({ title }: MissionProps) => {
  return (
    <div className="bg-archery-grey-100 p-10 text-center text-4xl font-semibold text-archery-grey-800">
      {title}
    </div>
  );
};

export default Mission;