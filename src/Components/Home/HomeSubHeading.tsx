"use client";

import Image from "next/image";
import React from "react";

interface HomeSubHeaderProps {
  parentToChild: (condition: boolean) => void;
  collectibles: boolean;
}

export default function HomeSubHeader({
  parentToChild,
  collectibles,
}: HomeSubHeaderProps) {
  const handleClick = (condition: boolean) => {
    parentToChild(condition);
  };
  return (
    <>
      <div
        className={`w-full flex justify-between my-2  items-center  md:justify-normal `}
      >
        <div className={` flex md:hidden `}>
          <button
            onClick={() => {
              handleClick(false);
            }}
            className={`h-[40px] ${
              collectibles
                ? ""
                : "  rounded-[3px] border-[#474D52] border-[1px] "
            } font-hk-grotesk text-[18px] text-[#ffffff] font-semibold p-2`}
          >
            Your Collections
          </button>
          <button
            onClick={() => {
              handleClick(true);
            }}
            className={`h-[40px] ${
              collectibles
                ? "  rounded-[3px] border-[#474D52] border-[1px]"
                : ""
            } font-hk-grotesk text-[18px] text-[#ffffff] font-semibold mx-3 p-2`}
          >
            Your Token
          </button>
        </div>

        <div className={` hidden md:flex  w-full justify-between items-center`}>
          <div className="flex">
            <div className="">
              <button
                onClick={() => {
                  handleClick(false);
                }}
                className={`  text-center 
            } font-hk-grotesk text-[18px] text-[#ffffff] font-semibold leading-[21.82px] mx-3 py-5  w-[100px]`}
              >
                Collectibles
              </button>
              <div
                className={`p-[1px] ${
                  collectibles ? "bg-[#474D52]" : "top-mob-nav"
                } `}
              ></div>
            </div>
            <div>
              <button
                onClick={() => {
                  handleClick(true);
                }}
                className={` text-center  font-hk-grotesk text-[16px] text-[#ffffff] font-semibold leading-[21.82px] mx-3 p-5 w-[100px] `}
              >
                Token
              </button>
              <div
                className={`p-[1px] ${
                  collectibles ? "top-mob-nav" : "bg-[#474D52]"
                } `}
              ></div>
            </div>
          </div>

          <div>
            <button className="flex justify-center items-center  py-[12.58px] px-[17.15px] bg-[#1766FF] rounded-[3px]">
              <div className="w-[15.06px] h-[15.06px]">
                <Image src="/cargo.png" className="h-full w-full" alt="Cargo" />
              </div>
              <span className=" font-lexend-deca font-normal text-[12px] leading-[17.12px] text-[#FFFFFF]">
                View All On Cargo
              </span>
            </button>
          </div>
        </div>

        <button className="w-[56px] h-[24px] rounded-[3px] bg-[#39404A] ml-2 md:hidden">
          {collectibles ? (
            <>
              <small className="text-[#FFFFFF] leading-[17.12px] text-[12px] font-medium tracking-[2%] ">
                5 Total
              </small>
            </>
          ) : (
            <>
              <small className="text-[#FFFFFF] leading-[17.12px] text-[12px] font-medium tracking-[2%] ">
                32 Total
              </small>
            </>
          )}
        </button>
      </div>
    </>
  );
}
