import Header from "@/components/header";
import FAQ from "@/components/join/faq";
import GalleryGrid from "@/components/join/galleryGrid";

const JoinPage = () => {
  return (
    <>
      <Header title="Join" subTitle="Archery @UCR" />
      <GalleryGrid />
      <FAQ />
    </>
  );
};

export default JoinPage;
