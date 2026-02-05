import Card from "@/components/board/card";
import Icon from "@/public/boardMemberIcon.webp";

const boardMembers = [
  { src: Icon, name: "First Last Name", position: "position" },
  { src: Icon, name: "First Last Name", position: "position" },
  { src: Icon, name: "First Last Name", position: "position" },
  { src: Icon, name: "First Last Name", position: "position" },
  { src: Icon, name: "First Last Name", position: "position" },
  { src: Icon, name: "First Last Name", position: "position" },
  { src: Icon, name: "First Last Name", position: "position" },
];

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
