export default function Obsidian() {
  return (
    <>
      <div className=" p-[1px]   obsidian-Tier rounded-[4.35px] w-full bg-gradient-to-r from-[#08B1DB] to-[#874BD2] font-hk-grotesk font-semibold text-[13.42px] leading-[18.1px] text-[#FFFFFF]">
        <div
          className=" h-[100%] rounded-[4.35px] opacity-[0.7] z-1 w-[100%] all-center  bg-gradient-to-r from-[#18313D] to-[#25273B] px-2 py-1"
          id="name"
        >
          <img
            src="/crystal.png"
            className="h-[20.63px] w-[20.63px] z-10 "
            alt=""
          />
          <span className="z-10'">Obsidian Tier</span>
        </div>
      </div>
    </>
  );
}
