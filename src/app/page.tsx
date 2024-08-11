"use client";

import HomeHeader from "@/Components/Home/HomeHeader";
import HomeSubHeader from "@/Components/Home/HomeSubHeading";
import HomeTable from "@/Components/Home/HomeTable";
import Trading from "@/Components/Home/Trading";
import { useState } from "react";

export default function Home() {
  const [collectibles, setCollectibles] = useState(false);
  const [redeemptionVisible, setRedeemptionVisible] = useState(false);

  const toggleCollectibles = (condition: boolean): void => {
    setCollectibles(condition);
  };

  const toggleRedeemption = (visible: boolean): void => {
    setRedeemptionVisible(visible);
  };

  return (
    <div className="h-[100vh] Scroll-none" id="Home">
      <div className="md:flex hidden h-[100vh]  Scroll-none " id="Desktop">
        <div
          className="w-[57.64%] pl-10 pr-44 py-5 bg-[#161B20] h-full overflow-y-scroll Scroll-none"
          id="desktop-left"
        >
          <HomeHeader />
          <HomeSubHeader
            parentToChild={toggleCollectibles}
            collectibles={collectibles}
          />
          <div className="h-full">
            <HomeTable collectibles={collectibles} />
          </div>
        </div>
        <div
          className="w-[42.36%] bg-[#1A2027] h-[100vh] p-10 overflow-y-scroll Scroll-none "
          id=""
        >
          <Trading toggleRedeemption={toggleRedeemption} />
        </div>
      </div>
      <div className="md:hidden px-5 " id="Mobile">
        <HomeHeader />
        <HomeSubHeader
          parentToChild={toggleCollectibles}
          collectibles={collectibles}
        />
        <HomeTable collectibles={collectibles} />
        <Trading toggleRedeemption={toggleRedeemption} />
      </div>

      {/* One time trading partical visibility start  */}
      {redeemptionVisible && (
        <>
          <div
            className="w-full h-[202px] flex justify-center items-end fixed bottom-0   z-50 bg-gradient-to-t from-[#000000] to-[#00000000]"
            id="redeemption"
          >
            <button
              onClick={() => {
                setRedeemptionVisible(false);
              }}
              className="  px-[32px] py-[15px] rounded-[3px] mb-7 text-[#FFFFFF] bg-gradient-to-r  from-[#00BAE8] to-[#8052D3] "
            >
              Check For PGU Redemption
            </button>
          </div>
        </>
      )}
    </div>
  );
}

{
  /* One time trading partical visibility end   */
}
