export interface handleState {
  particleBool?: boolean;
  polyientBool?: boolean;
}

interface FirstTradingPorps {
  data: {
    image: string;
    title: string;
    description: string;
  };
  handleState: ({ particleBool, polyientBool }: handleState) => any;
  trading: number;
}

export default function FirstTrading({
  data,
  handleState,
  trading,
}: FirstTradingPorps) {
  return (
    <>
      <div
        className={`absolute z-10 opacity-90 top-0 left-0 right-0 bottom-0 h-auto w-full bg-[#1A2027]`}
        onClick={() => {
          if (trading === 0) {
            handleState({ particleBool: false });
          } else {
            handleState({ polyientBool: false });
          }
        }}
      ></div>
      <div
        className={`relative h-[183px]  sm:w-[330px] mx-auto flex z-30  text-[#FFFFFF] justify-center flex-col items-center`}
        onClick={() => {
          if (trading === 0) {
            handleState({ particleBool: false });
          } else {
            handleState({ polyientBool: false });
          }
        }}
      >
        <img src={data.image} className="h-[100px] w-[100px]" alt="" />
        <p className="font-hk-grotesk font-bold text-[16px]">{data.title}</p>
        <p className="font-hk-grotesk font-medium text-center text-[16px]">
          {data.description}
        </p>
      </div>
    </>
  );
}
