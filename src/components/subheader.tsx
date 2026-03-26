interface SubheaderProps {
  name: string;
}

const Subheader = ({ name }: SubheaderProps) => {
  return (
    <div className="text-archery-grey-300 text-center text-4xl font-extrabold md:text-8xl">
      {name}
    </div>
  );
};

export default Subheader;
