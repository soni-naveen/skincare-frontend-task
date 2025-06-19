import React from "react";
import Image from "next/image";

export default function DetailCard({ img, text }) {
  return (
    <div className="flex items-center bg-primary rounded-full p-1 w-[270px] md:w-[320px] lg:w-[350px] xl:w-[370px]">
      <div>
        <Image
          src={img}
          alt="Skincare"
          height={200}
          width={200}
          priority={true}
          className="border border-[#2D3B36] p-0.5 border-dashed rounded-full object-cover w-20 md:w-24 lg:w-30"
        />
      </div>
      <div className="text-xs md:text-sm lg:text-base text-[#2D3B36] px-3 xl:px-5">
        {text}
      </div>
    </div>
  );
}
