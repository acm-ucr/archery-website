import Card from "@/components/board/card";
import { boardMembers } from "@/data/boardMembers";

const Board = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {boardMembers.map((member, index) => (
        <Card
          key={index}
          src={member.src}
          name={member.name}
          position={member.position}
        />
      ))}
    </div>
  );
};

export default Board;
