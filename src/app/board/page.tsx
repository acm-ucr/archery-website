import Header from "@/components/header";
import Card from "@/components/board/card";
import Icon from "@/public/boardMemberIcon.png";

const BoardPage = () => {
  return (
    <div>
      <Header title="Board" />
      <Card src={Icon} name="First Last Name" position="position" />
    </div>
  );
};

export default BoardPage;
