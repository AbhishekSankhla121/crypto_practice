"use client";

import React, { useEffect, useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { CardData } from "./Trading";

interface TradingCardProps {
  trading: number;
  poliyentAction: number;
  CardData: CardData[];
}

// use for change the color accordding to the user choice at trading button swticher
const Dependiencies = [
  {
    image: "/offpartical.png",
    ActionbtnName: "Swap",
    buttonName: [
      {
        name: "Select Your Token Wallet To Use This Action",
        bg_color: "#474D52",
      },
      {
        name: "Get started with this action",
        bg_color: "#00BAE8",
      },
    ],
  },
  {
    image: "/Onpolient.png",
    ActionbtnName: "Pool",
    buttonName: [
      {
        name: "Get started with this action",
        bg_color: "#474D52",
      },
      {
        name: "Get started with this action clicked",
        bg_color: "#35D094",
      },
    ],
  },
];

export default function TradingCard({
  trading,
  poliyentAction,
  CardData,
}: TradingCardProps) {
  const [buttonClick, setButtonClick] = useState<number | undefined>();
  // this change the image of trading card acc to poliyent action "swap" || "pool"
  if (poliyentAction === 1) {
    Dependiencies[1].image = "/bluePoliyent.png";
  } else {
    Dependiencies[1].image = "/Onpolient.png";
  }

  // Change the Button name if trading swticher is selected to poliyent and clicked
  if (trading === 0 && buttonClick) {
    Dependiencies[0].buttonName[1].name = `Convert 1 ${CardData[buttonClick].nameOne} into 1,000 ${CardData[buttonClick].nameTwo}`;
  }

  return (
    <>
      {CardData.map((element, index) => (
        <React.Fragment key={index}>
          <div
            onClick={() => {
              setButtonClick(index);
            }}
            className="w-full px-5 pt-5 bg-[#1F252D] my-5 rounded-[8px] relative"
          >
            <div className="w-full flex justify-between">
              <div className="flex items-center">
                <img
                  src={Dependiencies[trading].image}
                  className="h-[32px] w-[32px]"
                  alt=""
                />
                <h5 className="font-hk-grotesk font-semibold  text-[14px] md:text-[18px] leading-[24.5px] text-[#F3F4F6]  mx-2">
                  {/* show the label acc Swtich */}
                  {trading === 0 && (
                    <span>
                      Convert {element.nameOne} into{element.nameTwo}
                    </span>
                  )}
                  {/* Adjust poliyent Action label  */}
                  {trading === 1 && poliyentAction === 0 && (
                    <span>
                      Swap {element.nameOne} / {element.nameTwo}
                    </span>
                  )}

                  {trading === 1 && poliyentAction === 1 && (
                    <span>
                      {element.nameOne}/{element.nameTwo} Liquidity Pool
                    </span>
                  )}
                </h5>
              </div>
              <div className="flex items-center">
                {/* chnage the button name swap / pool start */}
                {trading === 1 && (
                  <>
                    <button className="font-hk-grotesk font-medium  text-[12px] leading-[17.12px] text-[#FFFFFF] bg-[#424A54] py-2 px-3 rounded-[4px] mx-2">
                      <span>{Dependiencies[poliyentAction].ActionbtnName}</span>
                    </button>
                  </>
                )}
                <img
                  src={element.imageOne}
                  className="h-[32px] w-[32px] mx-2"
                  alt=""
                />
                <img
                  src="/exchange.png"
                  className="w-[16px] h-[16px] mx-2"
                  alt=""
                />
                <img
                  src={element.imageTwo}
                  className="w-[32px] h-[32px] mx-2"
                  alt=""
                />
              </div>
            </div>

            {/* if clicked then show the card for user input start */}
            {buttonClick === index && (
              <div className="flex flex-col">
                <div className="flex flex-col  mt-5 border-[#FFFFFF] border-b-[1px] ">
                  {trading === 1 && (
                    <h6 className="font-hk-grotesk font-medium text-[14px] leading-[21px] text-[#A4A6A9]">
                      From:
                    </h6>
                  )}
                  <input
                    type="text"
                    className={`bg-transparent border-none outline-none py-1 text-[16px] text-[#FFFFFF] leading-[21.82px] font-semibold 
                      
                      `}
                    placeholder={`${
                      trading === 0 ? `Select ${element.nameOne}` : ``
                    }`}
                  />
                </div>
                <div className="flex flex-col my-5 border-[#FFFFFF] border-b-[1px] border-dotted ">
                  {trading === 1 && (
                    <h6 className="font-hk-grotesk font-medium text-[14px] leading-[21px] text-[#A4A6A9]">
                      Into:
                    </h6>
                  )}
                  <input
                    type="text"
                    className="bg-transparent border-none outline-none py-1 text-[#FFFFFF] text-[16px] leading-[21.82px] font-semibold"
                    placeholder={`${
                      trading === 0 ? `Amount ${element.nameTwo}` : ``
                    }`}
                  />
                </div>
              </div>
            )}
            {/* if clicked then show the card for user input end */}

            {/* reusing the button component chnage the name conditionally start */}
            <button
              className={`w-full rounded-[8px] font-hk-grotesk font-semibold text-[16px] leading-[21.82px] text-[#FFFFFF] text-center bg-[${
                Dependiencies[trading].buttonName[buttonClick === index ? 1 : 0]
                  .bg_color
              }] py-3 mt-5 mb-3`}
            >
              {
                Dependiencies[trading].buttonName[buttonClick === index ? 1 : 0]
                  .name
              }
            </button>

            {/* reusing the button component chnage the name conditionally end */}
          </div>
        </React.Fragment>
      ))}
    </>
  );
}
