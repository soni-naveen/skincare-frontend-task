import React from "react";

export default function DotButton({ text }) {
  return (
    <div className="flex items-center gap-3 border border-secondary w-fit py-2 xs:py-2.5 px-3.5 xs:px-4 rounded-full">
      <p className="w-2.5 xs:w-3 h-2.5 xs:h-3 bg-secondary rounded-full"></p>
      <p className="text-xs xs:text-sm sm:text-base">{text}</p>
    </div>
  );
}
