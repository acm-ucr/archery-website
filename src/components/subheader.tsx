interface SubheaderProps {
  name: string;
}

const Subheader = ({ name }: SubheaderProps) => {
  return (
    <h2 className="text-archery-grey-300 text-center text-8xl font-extrabold">
      {name}
    </h2>
  );
};

export default Subheader;
