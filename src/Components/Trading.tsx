"use client";
import { useState } from "react";
import TradingAction from "./TradingAction";
import TradingCard from "./TradingCard";
import TradingSwitcher from "./TradingSwitcher";
import TradingtopHeading from "./Tradingtopheading";
import FirstTrading from "./FirstTrading";

// data for paticlie and poliyent first interaction ui dependencies
//don't make any changes
//it is not card data!
const data = [
  {
    image: "/Logopartical.png",
    title: " The Particle Bridge Is Coming!",
    description:
      " Soon you can take full advantage of the first ever NFT to ERC-20 bridge.",
  },
  {
    image: "/LogoPoliyent.png",
    title: "The Polyient DEX Is Coming!",
    description:
      "Soon you will be able to preform a varierty of DEFI trading actions all in one simple place.",
  },
];

export interface CardData {
  nameOne: string;
  nameTwo: string;
  imageOne: string;
  imageTwo: string;
}

const CardData: CardData[] = [
  {
    nameOne: "ETH",
    nameTwo: "PGT",
    imageOne: "/5bn-img.png",
    imageTwo: "/2bn-img.png",
  },
  {
    nameOne: "XPGP",
    nameTwo: "DAI",
    imageOne: "/1bn-img.png",
    imageTwo: "/6bn-img.png",
  },
  {
    nameOne: "XPGP",
    nameTwo: "GEMS",
    imageOne: "/1bn-img.png",
    imageTwo: "/4bn-img.png",
  },
  {
    nameOne: "XPGP",
    nameTwo: "ETH",
    imageOne: "/1bn-img.png",
    imageTwo: "/5bn-img.png",
  },
];
const particleData = [{}];

export interface handleState {
  particleBool?: boolean;
  polyientBool?: boolean;
}

interface TradingPorps {
  toggleRedeemption: (visible: boolean) => void;
}
export default function Trading({ toggleRedeemption }: TradingPorps) {
  const [trading, setTrading] = useState<number>(0);
  const [particle, setParticle] = useState<boolean>(true);
  const [polyient, setPolyient] = useState<boolean>(true);
  const [poliyentAction, setPoliyentActtion] = useState<number>(0);

  const handleSwitcher = (i: number): any => {
    setTrading(i);
  };

  const handleAction = (i: number): any => {
    setPoliyentActtion(i);
  };

  const handleState = ({ particleBool, polyientBool }: handleState): any => {
    if (particleBool !== undefined) {
      setParticle(particleBool);
      toggleRedeemption(true);
    }
    if (polyientBool !== undefined) {
      setPolyient(polyientBool);
    }
  };
  return (
    <>
      <TradingtopHeading />
      <TradingSwitcher
        handleSwitcher={handleSwitcher}
        trading={trading}
        poliyentAction={poliyentAction}
      />
      <TradingAction
        trading={trading}
        handleAction={handleAction}
        poliyentAction={poliyentAction}
      />
      <div>
        <div>
          <div
            className={`h-[500px]
        relative
        Scroll-none
          ${trading === 1 ? "hidden" : ""}
        ${trading === 0 && particle ? "overflow-hidden" : "overflow-scroll"}
      `}
          >
            {trading === 0 && particle && (
              <FirstTrading
                data={data[0]}
                handleState={handleState}
                trading={trading}
              />
            )}
            <TradingCard
              trading={trading}
              poliyentAction={poliyentAction}
              CardData={CardData}
            />
          </div>
        </div>
        <div
          className={`h-[500px]
        relative
        Scroll-none
        ${trading === 0 ? "hidden" : ""}
        ${trading === 1 && polyient ? "overflow-hidden" : "overflow-scroll"}
      `}
        >
          {trading === 1 && polyient && (
            <FirstTrading
              data={data[1]}
              handleState={handleState}
              trading={trading}
            />
          )}
          <TradingCard
            trading={trading}
            poliyentAction={poliyentAction}
            CardData={CardData}
          />
        </div>
      </div>
    </>
  );
}
