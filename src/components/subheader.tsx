interface SubheaderProps {
  name: string;
}

const Subheader = ({ name }: SubheaderProps) => {
  return (
    <div className="text-archery-grey-300 text-center text-4xl md:text-8xl font-extrabold">
      {name}
    </div>
  );
};

export default Subheader;
