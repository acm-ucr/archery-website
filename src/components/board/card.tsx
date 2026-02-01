interface CardProps {
  imageSrc: string;
  name: string;
  position: string;
}
const Card = ({imageSrc, name, position}:  CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 p-4">
      <div className="mb-5 h-[300px] w-[300px] overflow-hidden rounded-full">
        <img
          className="h-full w-full rounded-full object-cover"
          src={imageSrc}
          alt="Board Member Icon"
        />
      </div>

      <div className="text-2xl font-bold">{position}</div>
      <div className="text-2xl">{name}</div>
    </div>
  );
}
