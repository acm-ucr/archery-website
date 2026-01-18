const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-archery-blue-500 mx-auto w-2/3 rounded-xl p-8">
      <div className="grid grid-rows-3 justify-items-center gap-10">
        <div className="bg-archery-pink-100 w-[55%] p-5 text-center text-2xl text-white">
          {props.text1}
        </div>

        <div className="grid w-[55%] grid-cols-2 gap-5">
          <div className="bg-archery-blue-100 w-full rounded-full p-5 text-center text-2xl">
            {props.text2}
          </div>

          <div className="bg-archery-blue-100 w-full rounded-full p-5 text-center text-2xl">
            {props.text2}
          </div>
        </div>

        <div className="bg-archery-yellow-100 w-[55%] p-5 text-center text-2xl">
          {props.text3}
        </div>
      </div>
    </div>
  );
};

export default Example;
