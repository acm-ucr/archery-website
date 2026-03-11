import Header from "@/components/header";
import FAQ from "@/components/join/faq";
import Gallery from "@/components/join/gallery";
import HowToJoin from "@/components/join/howToJoin";

const JoinPage = () => {
  return (
    <>
      <Header title="Join" subTitle="Archery @UCR" />
      <Gallery />
      <HowToJoin />
      <FAQ />
    </>
  );
};

export default JoinPage;
