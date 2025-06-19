import React from "react";
import Image from "next/image";

export default function DetailCard({ img, text, svg }) {
  return (
    <div
      className={`flex items-center bg-primary rounded-full p-1 ${
        svg
          ? "w-[250px] lg:w-[300px]"
          : "w-[270px] md:w-[320px] lg:w-[350px] xl:w-[370px]"
      }`}
    >
      <div className="border border-[#2D3B36] border-dashed rounded-full p-0.5">
        <Image
          src={img}
          alt="Skincare"
          height={200}
          width={200}
          priority={true}
          className={`rounded-full ${
            svg
              ? "bg-secondary w-16 md:w-20 lg:w-24 p-3"
              : "w-20 md:w-24 lg:w-30 p-0.5 object-cover"
          }`}
        />
      </div>
      <div className="text-xs md:text-sm lg:text-base leading-tight text-[#2D3B36] px-3 xl:px-5">
        {text}
      </div>
    </div>
  );
}
