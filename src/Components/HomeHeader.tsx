export default function HomeHeader() {
  return (
    <>
      <div className="w-full h-[117.3px] flex-col items-center my-5 bg-[#1D232A] md:bg-transparent  ">
        <div className="flex-col ">
          <h4 className="text-[#F3F4F6] text-[24px] font-semibold leading-[32.42px]   font-hk-grotesk ">
            <span className="md:hidden"> Your Wallet Dashboard</span>
            <span className="hidden md:block">
              Your Polyient Games NFT Wallet
            </span>
          </h4>

          <h6 className="text-[#A4A6A9] font-hk-grotesk font-medium leading-[21px] my-5 text-[12px] md:hidden">
            This is your wallet for everything Polyient Games.
          </h6>
          <h5 className="font-hk-grotesk text-[18px font-semibold leading-[25.5px] my-5 text-[#A4A6A9] hidden md:block">
            You have 320,000 Collectibles In Your Wallet
          </h5>
        </div>

        <hr className="border-[1px] border-b-[#474D52]" />
      </div>
    </>
  );
}
