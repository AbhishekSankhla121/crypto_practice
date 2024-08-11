"use client";

import React from "react";
import Tablemain from "./Tablemain";
import Tablebottom from "./Tablebottom";
import Tabletop from "./tabletop";
import Secondmain from "./Secondmain";

interface HomeTableProps {
  collectibles: boolean;
}

export default function HomeTable({ collectibles }: HomeTableProps) {
  const data1: string[] = ["Symbol", "Token", "Amount", "Id", "Manage"];
  const data2: string[] = ["Symbol", "Token", "Amount", "Manage Token "];

  return (
    <>
      {collectibles ? (
        <>
          <div className="w-full h-[585px] bg-[#161B20] border-[1.01px] border-[#474D52] rounded-[15.19px] px-2 my-10 ">
            <Tabletop arr={data1} />
            <Secondmain />
            <Tablebottom />
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-[585px] bg-[#161B20] border-[1.01px] border-[#474D52] rounded-[15.19px] px-2 my-10 ">
            <Tabletop arr={data2} />
            <Tablemain />
            <Tablebottom />
          </div>
        </>
      )}
    </>
  );
}
