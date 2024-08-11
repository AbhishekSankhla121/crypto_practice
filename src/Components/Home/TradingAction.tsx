"use client";

interface TradingAction {
  trading: number;
  handleAction: (i: number) => any;
  poliyentAction: number;
}

export default function TradingAction({
  trading,
  handleAction,
  poliyentAction,
}: TradingAction) {
  return (
    <>
      <div className="w-full h-[50px] flex border-b-[#474D52]  border-b-[1px] items-center justify-between">
        <div className="flex">
          <h5 className="font-hk-grotesk font-semibold leading-[24.5px] text-[18px] text-[#FFFFFF]">
            Particle Bridge Actions
          </h5>
          <button className="bg-[#373E47] text-[#FFFFFF] rounded-[3px] font-hk-grotesk font-medium text-[12px] leading-[17.12px] h-[24px] px-1 ml-3">
            20 Actions
          </button>
        </div>

        {trading === 1 && (
          <>
            <div className=" h-[32px] border-[1px] flex justify-between items-center rounded-full border-[#474D52] ">
              <button
                onClick={() => {
                  handleAction(0);
                }}
                className={`text-[#F3F4F6] py-1 px-2 uppercase font-sans text-[14px] font-medium   rounded-full
                 ${
                   poliyentAction === 0
                     ? "top-mob-nav  border-[1px] border-[#474D52] top-mob-green"
                     : ""
                 }
                  `}
              >
                swap
              </button>
              <button
                onClick={() => {
                  handleAction(1);
                }}
                className={`text-[#F3F4F6] py-1 px-2  uppercase font-sans text-[14px] font-medium  rounded-full ${
                  poliyentAction === 1
                    ? "top-mob-nav  border-[1px] border-[#474D52]"
                    : ""
                }`}
              >
                pool
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
