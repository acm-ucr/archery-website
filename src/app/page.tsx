import Mission from "@/components/home/ourMission";
import Carousel from "@/components/home/carousel";
import HomeLanding from "@/components/home/homeLanding";
import GetInvolved from "@/components/home/getInvolved";

const Home = () => {
  return (
    <>
      <HomeLanding />
      <Mission title_our="Our" title_mission="Mission" />
      <Carousel />
      <GetInvolved />
    </>
  );
};

export default Home;
