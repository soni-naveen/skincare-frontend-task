"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function page() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const firstLoad = sessionStorage.getItem("firstLoad");

    if (!firstLoad) {
      setLoading(true);
      sessionStorage.setItem("firstLoad", "true");
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }

    let start = 0;
    const end = 100;
    const duration = 2000;
    const stepTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex items-end justify-end h-[calc(100vh-10px)]">
          <span className="text-6xl xs:text-7xl text-[#26322C] mr-10 xs:mr-16 mb-5 xs:mb-10">
            {count}
          </span>
        </div>
      ) : (
        <>
          <Navbar /> <Footer />
        </>
      )}
    </>
  );
}
