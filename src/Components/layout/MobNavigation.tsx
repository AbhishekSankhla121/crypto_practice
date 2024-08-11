"use client";

import React, { useState } from "react";
import Profile from "./Profile";
import Obsidian from "./Obsediantier";
import Image from "next/image";

const data = [
  "Logout Of You Account",
  "Menu List Item",
  "Menu List Item",
  "Menu List Item",
  "View Sale Tiers",
];

const datatwo = [
  {
    name: "Join Our Discord Server",
    img: "/discordlogo.png",
  },
  {
    name: "Come Chat With Other In Telegram",
    img: "/Telegram.png",
  },
  {
    name: "Follow Us On Twitter",
    img: "/Logo_Twitter.png",
  },
];

interface NavbarPorps {
  isOpen: boolean;
  toggleMenu: any;
}

const NavSlideOut = ({ isOpen, toggleMenu }: NavbarPorps) => {
  const [menu, setMenu] = useState<number | undefined>();
  const hadndletoggle = () => {
    toggleMenu();
  };
  return (
    <div className="">
      {/* Sliding Navigation Menu */}
      <div
        className={` ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } h-[100vh] overflow-y-auto fixed inset-y-0 right-0 w-full  bg-[#1F272F] text-white transform transition-transform duration-300 z-[9999999999] md:hidden`}
      >
        <nav className="h-[100vh]">
          {/* head nav start */}
          <div className="w-full h-[140px] bg-[#1A2027] flex justify-center items-center">
            <div className=" px-10 w-full flex justify-between">
              <div className="flex">
                <div className="w-[56px] h-[56px] mr-4 flex items-center justify-center relative">
                  <Profile />
                  <div className="h-[14px] w-[14px] bg-[#D05559] rounded-full border-[#FFFFFF] border-[4px] absolute md:hidden bottom-[0  px] right-[5px]" />
                </div>
                <div className="">
                  <p className="font-hk-grotesk text-[16px] leading-[22.06px] mx-2  text-[#FFFFFF] font-medium">
                    John@email.com
                  </p>
                  <div className="w-[107.87px] h-[27px]">
                    <Obsidian />
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  hadndletoggle();
                }}
              >
                <button className="w-[40px] h-[40px] bg-[#282f37] text-[#FFFFFF] leading-[21.84px] text-[16px] font-font-Awsome font-black">
                  x
                </button>
              </div>
            </div>
          </div>
          {/* head nav end */}

          {/* middle bottom nav start */}
          <div className="w-full h-[68px] top-mob-nav flex justify-center items-center font-font-Awsome font-black text-[16px] leading-[21.84px]">
            <button className="w-[40px] h-[40px] rounded-[3px] bg-transparent-[20%] bg-[#4DCFDD] ">
              bolt
            </button>
            <h5 className="font-hk-grotesk text-[18px] leading-[24.5px] font-semibold mx-2">
              OPEN TRADING HUB
            </h5>
          </div>
          {/* middle bottom  nav end  */}

          <div className="w-full px-10 overflow-y-auto ">
            <div className="">
              <h6 className="text-[#A4A6A9] text-[14px] font-medium leading-[21px] font-hk-grotesk my-5">
                Menu Item Header
              </h6>
              {data.map((e, i) => (
                <React.Fragment key={i}>
                  <div
                    className={`w-full my-5  p-3 ${
                      menu === i ? "bg-[#443038]" : "bg-[#212A32]"
                    }`}
                    onClick={() => {
                      setMenu(i);
                    }}
                  >
                    {e}
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="">
              <h6 className="text-[#A4A6A9] text-[14px] font-medium leading-[21px] font-hk-grotesk my-10">
                Connect With Polyient Games
              </h6>
              {datatwo.map((e, i) => (
                <React.Fragment key={i}>
                  <div className={`w-full my-5  p-3 flex bg-[#212A32]`}>
                    <div className="h-[24px] w-[24px] rounded-full mr-2">
                      <Image
                        className="h-full w-full rounded-full"
                        src={e.img}
                        alt={e.img}
                      />
                    </div>
                    {e.name}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavSlideOut;
