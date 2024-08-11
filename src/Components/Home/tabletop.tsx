import React from "react";

interface TabletopPorps {
  arr: string[];
}

export default function Tabletop({ arr }: TabletopPorps) {
  return (
    <>
      <div className="h-[53px] w-full flex justify-evenly items-center]">
        {arr.map((e, i) => (
          <React.Fragment key={i}>
            <button
              className={
                "text-[#FFFFFF] tracking-[2%] leading-[17.12px] text-[12px] font-lexend-deca"
              }
            >
              {e}
            </button>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
