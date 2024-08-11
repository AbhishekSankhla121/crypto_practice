import { FaQrcode } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Obsidian from "./Obsediantier";
import Profile from "./Profile";
import { useState } from "react";

interface NavbarPorps {
  toggleMenu: any;
}

export default function NavBar({ toggleMenu }: NavbarPorps) {
  return (
    <>
      <div
        className="w-full md:h-[82.02px] h-[112px] bg-[#1A2027] flex justify-between items-center px-[2%]"
        id="NavBar"
      >
        <div id="Nav-image">
          <img
            src="/company-logo-name.png"
            className=" hidden md:block max-w-[243.22px] max-h-[44.57px]"
            alt=""
          />
          <img
            src="/compony-logo-image.png"
            className="w-[40px] h-[40px]  md:hidden"
            alt=""
          />
        </div>

        <div className="flex md:w-[757px] w-full h-[40px] md:h-[44px]  md:gap-[16px] md:justify-between items-center justify-end">
          <div
            className="md:w-[279px] w-[162px] rounded-[4px] h-[40px] flex items-center justify-around md:h-[43.64px]  bg-[#282F37]"
            id="Nav-showbalance"
          >
            <div className="all-center">
              <h3 className="text-[#CBCDD0]  leading-[22.06px] text-[16px] font-hk-grotesk font-medium  hidden md:block">
                Balance:
              </h3>
              <h3 className="text-[#CBCDD0]  leading-[21.82px] text-[16px] font-hk-grotesk font-semibold  ">
                10.0000 ETH
              </h3>
            </div>

            <div className="flex justify-between ">
              <button className="show-balance-button bg-[#00BAE8] all-center hidden md:block ">
                pl
              </button>
              <button className="show-balance-button bg-[#00BAE8] all-center md:hidden ">
                <FaQrcode />
              </button>
              <button className="show-balance-button bg-[#D05559] all-center hidden md:">
                minus
              </button>
            </div>
          </div>

          <div className="w-sm md:flex hidden">
            <Obsidian />
          </div>

          <div className="flex items-center">
            <div
              className=" md:w-auto h-[32px] md:h-full gap-[8px]flex flex  items-center ml-2 md:ml-0 relative "
              id="Nav-userDetails"
            >
              <Profile />
              <div className="h-[10px] w-[10px] bg-[#D05559] rounded-full border-[#FFFFFF] border-[3px] absolute md:hidden bottom-[3px] right-[0px]" />
            </div>
            <p className="font-roboto text-[16px] leading-[28px] mx-2  text-[#FFFFFF] font-normal  hidden md:block">
              john
            </p>
            <p
              className="font-roboto text-[16px] leading-[28px] mx-2  text-[#FFFFFF] font-normal  md:hidden "
              onClick={() => {
                toggleMenu();
              }}
            >
              <FaBars />
            </p>
          </div>

          <div
            className="w-[38px] h-[38px]  px-[8px] hidden md:flex py-[4px] rounded-[4px] bg-[#282F37] all-center relative text-[#FFFFFF]"
            id="nav-bell"
          >
            <p className="leading-[21.84px] text-[16px] font-font-Awsome font-black ">
              bell
            </p>
            <button className="absolute font-hk-grotesk w-[17px] h-[17px] leading-[17.12px] right-[-5px] top-[-5px] text-[10px] font-bold bg-[#474D52] rounded-full">
              0
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
