export default function Card(props: {
  imageSrc: string;
  name: string;
  position: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 p-4">
      <div className="mb-5 h-[300px] w-[300px] overflow-hidden rounded-full">
        <img
          className="h-full w-full scale-150 rounded-full object-cover object-top"
          src={props.imageSrc}
          alt="Board Member Icon"
        />
      </div>

      <div className="text-2xl font-bold">{props.position}</div>
      <div className="text-2xl">{props.name}</div>
    </div>
  );
}
