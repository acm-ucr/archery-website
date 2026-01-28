import Example from "@/app/example";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div className="flex h-screen w-screen items-center justify-center">
        <Example text1="Adjust" text2="These" text3="Props" />
      </div>
    </div>
  );
};

export default Home;
