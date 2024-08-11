import React from "react";

const data = [
  {
    image: "/1bn-img.png",
    Token: "XPGP.0",
    amaount: 4200,
  },
  {
    image: "/2bn-img.png",
    Token: "PGT",
    amaount: 32,
  },
  {
    image: "/4bn-img.png",
    Token: "GEM",
    amaount: 750,
  },
  {
    image: "/5bn-img.png",
    Token: "ETH",
    amaount: 1.2,
  },
  {
    image: "/6bn-img.png",
    Token: "DAI",
    amaount: 1000,
  },
];

export default function Secondmain() {
  return (
    <>
      <div className="h-[480px] overflow-y-auto scroll-none ">
        {data.map((element, index) => (
          <React.Fragment key={index}>
            <div className="h-[67px] flex w-full border-[#474D52] rounded-[4px] border-[1px] bg-[#191E23] justify-evenly my-2">
              <div className=" flex items-center px-1">
                <div className="w-[24px] flex items-center justify-center h-[24px] p-[4px] bg-[#282D34] mx-4">
                  <input
                    type="checkbox"
                    className="bg-transparent border-[1px] border-white "
                  />
                </div>
                <div className="h-[36px] w-[36px]">
                  <img src={element.image} className="h-full w-full" />
                </div>
              </div>
              <div className="w-[70px] flex items-center font-hk-grotesk text-[12px] justify-center  text-[#FAFAFB] leading-[17.12px] font-semibold tracking-[2%]">
                <p>{element.Token}</p>
              </div>
              <div className="w-[70px] flex items-center font-hk-grotesk justify-center  text-[12px] text-[#FAFAFB] leading-[17.12px] font-semibold tracking-[2%]">
                <p>{element.amaount}</p>
              </div>
              <div className="w-[140px] flex items-center justify-evenly">
                <div className=" flex items-center justify-center  font-hk-grotesk text-[12px] text-[#FAFAFB] leading-[17.12px] font-semibold tracking-[2%]">
                  <button className="w-[60px] h-[32px] bg-[#00BAE8] px-[16px] py-[7px] rounded-[3px]">
                    Send
                  </button>
                </div>
                <div className="flex items-center font-hk-grotesk text-[12px] text-[#FAFAFB] leading-[17.12px] justify-center font-semibold tracking-[2%]">
                  <div className="w-[32px] h-[32px] bg-[#313943] rounded-[3px] flex justify-center items-center">
                    <img
                      src="/setting.png"
                      alt=""
                      className="h-[12px] w-[12px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
