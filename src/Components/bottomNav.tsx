import React from "react";
import BottomNavButton from "./bottomNavButton";

export interface ButtonNavData {
  image: string;
  name: string;
  token: string;
  type: string | null;
}

const bottomNavButtonData: ButtonNavData[] = [
  {
    image: "/1bn-img.png",
    name: "0.02 ETH",
    token: "ERC-20",
    type: "wallet",
  },
  {
    image: "/2bn-img.png",
    name: "0.1 ETH",
    token: "ERC-20",
    type: "wallet",
  },
  {
    image: "/3bn-img.png",
    name: "1,000 XPGP",
    token: "ERC-721",
    type: "...",
  },
  {
    image: "/4bn-img.png",
    name: "0.001 ETH",
    token: "ERC-20",
    type: "wallet",
  },
  {
    image: "/bn-stop.png",
    name: "0.001 ETH",
    token: "ERC-20",
    type: null,
  },
];

export default function BottomNav() {
  return (
    <>
      <div
        className="w-full md:h-[72.23px] h-[60px]   bg-[#1F272F] flex md:justify-between items-center md:pl-3"
        id="bottom-nav"
      >
        <div
          className=" text-[#FFFFFF] md:w-[180px] w-[37%]  h-[40px]  flex all-center justify-center "
          id="bottom-nav-all-assests"
        >
          <h5 className=" text-[18px] leading-[24.5px] font-semibold text-center font-hk-grotesk">
            All Assets
          </h5>
          <button className=" w-[23px] h-[23px] rounded-[3px] text-[12px] leading-[17.12px] mx-2 font-medium font-hk-grotesk tracking-[2%] bg-[#3B434E]">
            5
          </button>
        </div>

        <div className="flex  md:w-full w-[63%] md:h-full h-auto   items-center justify-between overflow-x-auto  scroll-none">
          {bottomNavButtonData?.map((element, index) => (
            <React.Fragment key={index}>
              <BottomNavButton data={element} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
