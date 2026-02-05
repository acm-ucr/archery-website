import Mission from "@/components/home/ourMission";
import Carousel from "@/components/home/carousel";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Mission title_our="Our" title_mission="Mission" />
    </div>
    <Carousel />
  );
};

export default Home;
