import React from "react";
import Image from "next/image";

export default function ItemCard({ item, swiper }) {
  return (
    <div className={`w-fit relative ${swiper ? "mx-auto" : ""}`}>
      <Image
        src={item.img}
        alt={item.name}
        height={600}
        width={600}
        priority={true}
        className="w-[370px] sm:w-[420px] h-[500px] sm:h-[550px] rounded-2xl object-cover"
      />
      <div className="absolute bottom-4 w-[95%] left-1/2 -translate-x-1/2 flex justify-between items-center bg-main p-2 rounded-lg">
        <div className="flex flex-col gap-4 ml-2">
          <p className="text-sm text-secondary">{item.name}</p>
          <p className="text-[#2D3B36]/50 text-xs">FROM ${item.price}</p>
        </div>
        <div>
          <img
            src="/assets/cart.svg"
            alt="cart"
            className="p-4 h-14 bg-[#2D3B36]/10 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
