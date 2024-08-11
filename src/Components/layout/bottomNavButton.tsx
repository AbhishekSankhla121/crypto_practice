import { ButtonNavData } from "./bottomNav";

export default function BottomNavButton({ data }: { data: ButtonNavData }) {
  return (
    <>
      <div className=" border-r-[1px] border-r-[#4C5259] px-4 md:px-0 ">
        <div className="mx-2 md:w-[250px] w-10% md:gap-[16px]  md:mx-0 gap-[4px] md:h-[44px] flex justify-around md:justify-center  items-center">
          <img src={`${data.image}`} className="w-[24px] h-[24px]" alt="" />
          <p className="md:text-[16px] text-center text-[14px] font-semibold leading-[21px] w-[90px] md:leading-[21.82px] font-hk-grotesk text-[#FAFAFB]">
            {data.name}
          </p>
          <button className="md:w-[52px] w-[80px] h-[24px] rounded-[3px] font-hk-grotesk leading-[17.12px] text-[12px] bg-[#3B434E] font-medium tracking-[2%] text-[#FFFFFF]">
            {data.token}
          </button>
          <button
            className={`md:w-[26px] w-[80px] h-[26px] font-font-Awsome flex-wrap rounded-[3px] border-[0.5px] mx-1 md:mx-0 border-[#A4A6A9] bg-[#2D353E] font-black leading-[17.12px] text-[10px] tracking-[2%]  text-[#FFFFFF] ${
              data.type === null ? "hidden" : ""
            }`}
          >
            {data.type}
          </button>
        </div>
      </div>
    </>
  );
}
