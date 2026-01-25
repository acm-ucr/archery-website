import Header from "@/components/header";
import Card from "@/components/board/card";

const BoardPage = () => {
  return (
    <div>
      <Header title="Board" />
      <Card
        imageSrc="/boardMemberIcon.webp"
        name="First Last Name"
        position="position"
      />
    </div>
  );
};

export default BoardPage;
