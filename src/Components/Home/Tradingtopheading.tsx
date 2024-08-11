import Image from "next/image";

export default function TradingtopHeading() {
  return (
    <>
      <div className="w-full " id="tradingTopHeadding">
        <div className="flex items-center h-[41px] gap-[16px] md:border-b-[1px] py-10 md:border-[#474D52] ">
          <div className="w-[40px] h-[40px] rounded-[4px] flex items-center justify-center bg-gradient-to-r from-[#008FB2] to-[#1C9BA5]">
            <Image
              src="/trading.png"
              className="w-[22.59px] h-[24px]"
              alt="trading"
            />
          </div>
          <h5 className="font-hk-grotesk font-semibold text-[18px] leading-[24.5px] text-[#FFFFFF] ">
            Trading Hub
          </h5>
        </div>
      </div>
    </>
  );
}
