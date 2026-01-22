const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-archery-blue-500 flex w-2/3 items-center justify-center rounded-3xl py-12">
      <div className="flex w-1/2 flex-col items-center gap-8">
        <div className="bg-archery-pink-100 flex w-full items-center justify-center rounded-md py-5 text-center text-3xl font-semibold text-white">
          {props.text1}
        </div>

        <div className="flex w-full flex-row items-center justify-center gap-2">
          <div className="bg-archery-blue-100 flex flex-1 items-center justify-center rounded-full py-5 text-center text-2xl font-semibold">
            {props.text2}
          </div>
          <div className="bg-archery-blue-100 flex flex-1 items-center justify-center rounded-full py-5 text-center text-2xl font-semibold">
            {props.text2}
          </div>
        </div>

        <div className="bg-archery-yellow-100 flex w-full items-center justify-center rounded-md py-5 text-center text-2xl font-semibold">
          {props.text3}
        </div>
      </div>
    </div>
  );
};

export default Example;
