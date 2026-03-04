import Card from "@/components/board/card";
import { boardMembers } from "@/data/boardMembers";
import Image from "next/image";
import boardImage from "@/public/Board/boardImage.webp";

const Board = () => {
  return (
    <div>
      <div className="my-25 flex flex-wrap items-center justify-center gap-10">
        {boardMembers.map((member, index) => (
          <Card
            key={index}
            src={member.src}
            name={member.name}
            position={member.position}
          />
        ))}
      </div>

      <Image
        src={boardImage}
        alt="Bottom Board Group Image"
        className="w-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_100%)]"
      />
    </div>
  );
};

export default Board;
