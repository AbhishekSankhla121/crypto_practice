"use client";

import React, { useEffect, useState } from "react";

// sample data
const data = [
  { name: " Particle Bridge", img: "/offpartical.png" },
  { name: "Polyient DEX", img: "/Onpolient.png" },
];

interface TradingSwitcherProps {
  handleSwitcher: (i: number) => any; //tracking button
  trading: number; // current active status button
  poliyentAction: number; // its for pool and  swap tracking
}

export default function TradingSwitcher({
  handleSwitcher,
  trading,
  poliyentAction,
}: TradingSwitcherProps) {
  // Change the state of According to click  particile and poliyent button trackeing Start here
  const handleclick = (i: number) => {
    handleSwitcher(i);
  };
  // Change the state of According to click  particile and poliyent button trackeing end here

  // Changing the image according to Pool and action start here
  if (poliyentAction === 1) {
    data[1].img = "/bluePolyient.png";
  } else {
    data[1].img = "/Onpolient.png";
  }
  // Changing the image according to Pool and action end here

  return (
    <>
      <div className="w-full flex my-10">
        {data.map((e, i) => (
          <React.Fragment key={i}>
            <div
              onClick={() => {
                handleclick(i);
              }}
              className={`${
                trading === i ? "bg-[#282F37]" : "bg-[#1A2027]"
              } w-full z-[0] relative`}
            >
              <div
                className={`${
                  trading === i
                    ? ""
                    : "absolute top-0 left-0 w-full h-full bg-[#1F272F] z-1 opacity-70"
                } `}
              ></div>
              <button className=" flex items-center  py-2 px-3 mx-auto">
                <div className="w-[24px] h-[24px] relative">
                  <img
                    src={e.img}
                    className="h-full w-full object-contain"
                    alt=""
                  />
                </div>
                <span className="font-lexend-deca font-semibold text-[#FFFFFF] leading-[16px] text-[20px] mx-1">
                  {e.name}
                </span>
              </button>
              <div
                className={`h-[2px] ${
                  trading === i
                    ? `${
                        trading == 0 || poliyentAction === 1 // if trading and pool status active then blue underling else green
                          ? "top-mob-nav"
                          : "top-mob-green"
                      }`
                    : "bg-[#1F272F]"
                } `}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
