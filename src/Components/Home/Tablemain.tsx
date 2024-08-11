import Image from "next/image";
import React from "react";

const data = [];

export default function Tablemain() {
  return (
    <>
      <div className="h-[480px] overflow-y-auto scroll-none ">
        {Array.from({ length: 10 }).map((_, index) => (
          <React.Fragment key={index}>
            <div className="h-[67px] flex w-full border-[#474D52] rounded-[4px] border-[1px] bg-[#191E23] justify-evenly my-2">
              <div className=" flex items-center px-1">
                <div className="w-[24px] flex items-center justify-center h-[24px] p-[4px] mx-4 bg-[#282D34]">
                  <input
                    type="checkbox"
                    className="border-[1px] border-white  checked:bg-teal-600 checked:h-4  accent-orange-500 w-4 h-4 bg-inherit "
                  />
                </div>
                <div className="h-[36px] w-[36px]">
                  <Image
                    src="/table.png"
                    alt="table"
                    className="h-full w-full"
                  />
                </div>
              </div>
              <div className="w-[70px] flex items-center font-hk-grotesk text-[12px] justify-center  text-[#FAFAFB] leading-[17.12px] font-semibold tracking-[2%]">
                <p>PGFK.0</p>
              </div>
              <div className="w-[70px] flex items-center font-hk-grotesk justify-center  text-[12px] text-[#FAFAFB] leading-[17.12px] font-semibold tracking-[2%]">
                <p>1 PGFK</p>
              </div>
              <div className="w-[70px] flex items-center justify-center  font-hk-grotesk text-[12px] text-[#FAFAFB] leading-[17.12px] font-semibold tracking-[2%]">
                <p>ID:0000</p>
              </div>
              <div className="w-[70px] flex items-center font-hk-grotesk text-[12px] text-[#FAFAFB] leading-[17.12px] justify-center font-semibold tracking-[2%]">
                <div className="w-[32px] h-[32px] bg-[#313943] rounded-[3px] flex justify-center items-center">
                  <Image
                    src="/setting.png"
                    alt="Setting"
                    className="h-[12px] w-[12px]"
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
