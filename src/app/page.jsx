"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import DetailCard from "./components/DetailCard";
import TextReveal from "./components/TextReveal";
import DotButton from "./components/DotButton";
import ItemCard from "./components/ItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi";

export default function page() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  // Loader
  useEffect(() => {
    // setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);

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

  const slideRef = useRef(null);

  const items = [
    {
      id: 1,
      name: "ALYA SKIN CLEANSER",
      price: "29.99",
      img: "/assets/img6.jpg",
    },
    {
      id: 2,
      name: "RITUAL OF SAKURA",
      price: "27.99",
      img: "/assets/img3.jpg",
    },
    {
      id: 3,
      name: "THE BODY LOTION.",
      price: "19.99",
      img: "/assets/img5.jpg",
    },
    {
      id: 4,
      name: "ALYA SKIN CLEANSER",
      price: "29.99",
      img: "/assets/img6.jpg",
    },
    {
      id: 5,
      name: "RITUAL OF SAKURA",
      price: "27.99",
      img: "/assets/img3.jpg",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const FAQs = [
    {
      Question: "Are your products safe for sensitive skin?",
      Answer:
        "Yes! Our products are gentle, fragrance-free, and suitable for sensitive skin. We recommend a patch test before use.",
    },
    {
      Question: "Are your products cruelty-free?",
      Answer:
        "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
    },
    {
      Question: "What’s your return policy?",
      Answer:
        "We offer a 30-day return policy on all items. Products must be unused and in their original packaging to qualify for a return.",
    },
    {
      Question: "Do you ship internationally?",
      Answer: "Yes, we offer international shipping to most countries.",
    },
    {
      Question: "How do i choose the right product?",
      Answer:
        "You can choose the right product by exploring our product descriptions, usage guides, and customer reviews.",
    },
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      {loading ? (
        <div className="flex items-end justify-end h-[calc(100vh-70px)]">
          <span className="text-7xl xs:text-8xl text-[#26322C] pr-10 xs:pr-16 pb-10 xs:pb-0 font-medium">
            {count}
          </span>
        </div>
      ) : (
        <>
          <Navbar />
          {/* Hero section  */}
          <section>
            <div className="flex flex-col xs:flex-row items-center xs:justify-around sm:justify-between lg:justify-around sm:px-10 md:px-5 lg:px-0 pt-20 xs:pb-32 md:py-20 relative overflow-clip">
              <div className="text-sm xs:text-xs lg:text-sm w-[85%] xs:max-w-[200px] lg:max-w-[250px] xs:text-justify leading-tight mb-10 xs:mb-14 md:mb-0">
                <div className="mt-[40%] xs:mt-0">
                  <span className="xs:text-end xs:block">
                    Transform your skincare
                  </span>{" "}
                  routine with premium products that restore, protect, and
                  enhance your nautural glow every day.
                </div>
                <p className="md:hidden absolute top-16 xs:top-auto xs:bottom-4 left-1/2 -translate-x-1/2 text-center text-[18dvw] font-extrabold text-secondary leading-[80%] tracking-tight">
                  GLOWWWW
                  <br /> NATURALLY
                </p>
              </div>
              <div className="hidden md:block font-bold max-w-[240px] lg:max-w-[290px] break-all text-6xl lg:text-7xl text-secondary">
                GLOW NATUR-ALLY
              </div>
              <div className="hidden xs:block">
                <Image
                  src="/assets/img1.jpg"
                  alt="facewash"
                  height={600}
                  width={600}
                  priority={true}
                  className="w-60 sm:w-72 md:w-40 h-60 sm:h-72 md:h-40 md:rounded-2xl object-cover"
                />
              </div>
            </div>
            <div className="relative pt-96 md:pt-72 lg:pt-66">
              <button
                className='hidden absolute top-[50%] md:top-[40%] lg:top-[25%] right-[6%] md:left-[5%] lg:left-[7%] bg-secondary px-6 lg:px-8 py-2.5 lg:py-3 rounded-full text-primary text-sm lg:text-base w-fit 

                xs:flex items-center gap-2 overflow-hidden border-[1px]
              border-secondary transition-all duration-500 text-sm md:text-base
              
                before:absolute before:inset-0
                before:-z-10 before:translate-x-[150%]
                before:translate-y-[150%] before:scale-[2.5]
                before:rounded-[100%] before:bg-primary
                before:transition-transform before:duration-1000
                before:content-[""]
        
                hover:scale-102 hover:border-secondary hover:text-secondary
                hover:before:translate-x-[0%]
                hover:before:translate-y-[0%]
                active:scale-95 cursor-pointer'
              >
                Shop Now
              </button>
              <p className="relative text-secondary font-extrabold text-[20dvw] text-center leading-none tracking-tight overflow-clip -mb-2 xxs:-mb-3 sm:-mb-4 md:-mb-5 lg:-mb-7 xl:-mb-9 2xl:-mb-11 -z-1">
                SKINCARE
              </p>
              <div>
                <div className="absolute xs:left-[5%] md:left-1/2 bottom-14 xs:bottom-10 md:bottom-6 lg:bottom-8 xl:bottom-10 2xl:bottom-12 translate-x-0 md:-translate-x-1/2">
                  <Image
                    src="/assets/img2.jpg"
                    alt="Skincare"
                    height={600}
                    width={600}
                    priority={true}
                    className="w-screen xs:w-[300px] sm:w-[320px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-[400px] xs:h-[350px] sm:h-[400px] lg:h-[450px] xl:h-[500px] md:rounded-2xl object-cover"
                  />
                  <div className="absolute bottom-3 lg:bottom-5 left-1/2 -translate-x-1/2">
                    <DetailCard
                      text={
                        "While giving you an invigorating cleansing experience."
                      }
                      img={"/assets/img1.jpg"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="-mt-5">
              <Image
                src="/assets/img1.jpg"
                alt="facewash"
                height={600}
                width={600}
                priority={true}
                className="xs:hidden w-screen xs:w-60 sm:w-72 md:w-40 h-[400px] xs:h-60 sm:h-72 md:h-40 md:rounded-2xl object-cover"
              />
            </div>
          </section>
          <main className="bg-main">
            {/* Text Reveal Scroll */}
            <section>
              <div className="flex justify-center py-10 xs:hidden">
                <button className="xs:hidden bg-secondary px-10 py-3 rounded-full text-primary font-light text-sm w-fit">
                  Shop Now
                </button>
              </div>
              <TextReveal
                text={
                  "Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day. Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin."
                }
              />
            </section>
            {/* Why Our Products */}
            <section className="flex flex-col gap-20 lg:gap-0 lg:flex-row justify-around text-secondary lg:py-20">
              <div className="lg:max-w-[420px] xl:max-w-md flex flex-col gap-10 sm:gap-14 px-[5%] lg:px-0">
                <div>
                  <DotButton text={"Why Our Products"} />
                </div>
                <div className="flex flex-col gap-12">
                  <div className="space-y-6">
                    <p className="text-3xl sm:text-4xl">
                      YOUR SKIN DESERVES THE BEST CARE.
                    </p>
                    <p className="text-sm">
                      Discover a curated collection of skincare products
                      designed to rejuvenate, protect, and pamper your skin.
                      Explore our rage crafted with love backed by science, and
                      inspired by nature.
                    </p>
                  </div>
                  <div className="flex items-start gap-4 xs:gap-6 sm:gap-10">
                    <p className="text-3xl sm:text-4xl bg-gradient-to-b from-secondary to-primary text-transparent bg-clip-text">
                      01
                    </p>
                    <div className="flex flex-col gap-2 sm:gap-5 ml-2">
                      <p className="text-3xl sm:text-4xl">Bio Ingredients</p>
                      <p className="leading-snug text-sm">
                        Get naturally beautiful and transform with our bio
                        ingredients creams for healthy, radiant skin.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 xs:gap-6 sm:gap-10">
                    <p className="text-3xl sm:text-4xl bg-gradient-to-b from-secondary to-primary text-transparent bg-clip-text">
                      02
                    </p>
                    <div className="flex flex-col gap-2 sm:gap-5">
                      <p className="text-3xl sm:text-4xl">Everything Natural</p>
                      <p className="leading-snug text-sm">
                        Pure ingredients for pure skin. The Perfect solution for
                        your skin care needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 xs:gap-6 sm:gap-10">
                    <p className="text-3xl sm:text-4xl bg-gradient-to-b from-secondary to-primary text-transparent bg-clip-text">
                      03
                    </p>
                    <div className="flex flex-col gap-2 sm:gap-5">
                      <p className="text-3xl sm:text-4xl">All Handmade</p>
                      <p className="leading-snug text-sm">
                        Made with love and care. Just for you. Give your skin
                        the tender loving care it deserves.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative">
                  <Image
                    src="/assets/img4.jpg"
                    alt="skincare"
                    height={700}
                    width={600}
                    priority={true}
                    className="w-screen lg:w-[500px] xl:w-[600px] h-[700px] lg:rounded-2xl object-cover"
                  />
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                    <DetailCard
                      text={"Best Skin Care Product Award Wining"}
                      img={"/assets/award.svg"}
                      svg={true}
                    />
                  </div>
                </div>
                <div className="flex justify-between px-[3%] lg:px-0 pt-2 lg:pt-3 text-xs xs:text-sm">
                  <p>SINCE 2001</p>
                  <p>LEARN MORE</p>
                </div>
              </div>
            </section>
            {/* Best Selling Products  */}
            <section className="pt-20 pb-10 lg:py-10">
              <div className="flex flex-col gap-10 px-6 sm:pl-10 lg:px-0 lg:gap-0 lg:flex-row justify-around lg:items-center max-w-[1600px] mx-auto">
                <div>
                  <DotButton text={"Best Selling Products"} />
                </div>
                <div className="text-3xl text-secondary sm:text-4xl max-w-md lg:text-center">
                  Skincare That Brings Out Your Natural Radiance
                </div>
                <div className="hidden lg:flex gap-12">
                  <button
                    onClick={() => slideRef.current?.slidePrev()}
                    className="cursor-pointer"
                  >
                    <img
                      src="/assets/leftarrow.svg"
                      alt="left"
                      className="w-12 h-12"
                    />
                  </button>
                  <button
                    onClick={() => slideRef.current?.slideNext()}
                    className="cursor-pointer"
                  >
                    <img
                      src="/assets/rightarrow.svg"
                      alt="right"
                      className="w-12 h-12"
                    />
                  </button>
                </div>
              </div>
              <div className="px-10 lg:px-5 py-16">
                <Swiper
                  onSwiper={(swiper) => {
                    slideRef.current = swiper;
                  }}
                  className="max-w-[1350px] mx-auto"
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 25,
                    },
                    1280: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                >
                  {items.map((item) => {
                    return (
                      <SwiperSlide>
                        <ItemCard key={item.id} item={item} swiper={true} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="lg:hidden flex justify-center gap-10">
                <button
                  onClick={() => slideRef.current?.slidePrev()}
                  className="cursor-pointer"
                >
                  <img
                    src="/assets/leftarrow.svg"
                    alt="left"
                    className="w-12 h-12"
                  />
                </button>
                <button
                  onClick={() => slideRef.current?.slideNext()}
                  className="cursor-pointer"
                >
                  <img
                    src="/assets/rightarrow.svg"
                    alt="right"
                    className="w-12 h-12"
                  />
                </button>
              </div>
            </section>
            {/* Big Poster  */}
            <section className="py-20">
              <div className="relative w-screen lg:w-[95%] mx-auto">
                <Image
                  src="/assets/img7.jpg"
                  alt="skincare"
                  height={700}
                  width={600}
                  priority={true}
                  className="w-screen lg:w-[95%] mx-auto h-[700px] lg:rounded-3xl object-cover"
                />
                <div className="absolute inset-0 w-screen lg:w-[95%] mx-auto lg:rounded-3xl bg-gradient-to-t from-[#000000] to-transparent opacity-60 pointer-events-none" />

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[90%] lg:max-w-4xl flex flex-col justify-center items-center gap-8">
                  <p className="text-main text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-center leading-tight">
                    Feel Beautiful Inside and Out with Every Product.
                  </p>
                  <button className="flex items-center justify-center bg-main px-6 lg:px-8 py-2.5 lg:py-3 rounded-full text-secondary text-sm lg:text-base w-fit">
                    Shop Now
                  </button>
                </div>
              </div>
            </section>
            {/* Tab Section */}
            <section>
              <div className="flex justify-center mb-10">
                <div className="text-3xl sm:text-4xl max-w-lg px-5 md:text-center text-secondary">
                  Feel Beautiful Inside and Out with Every Product.
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-5 justify-center px-10">
                <button className="flex items-center justify-center bg-secondary px-6 lg:px-8 py-2.5 lg:py-3 rounded-full text-main text-sm lg:text-base w-40 lg:w-52">
                  NEW ARRIVAL
                </button>
                <button className="flex items-center justify-center bg-main px-6 lg:px-8 py-2.5 lg:py-3 rounded-full text-secondary border border-secondary text-sm lg:text-base w-40 lg:w-52">
                  CLEANSING
                </button>
                <button className="flex items-center justify-center bg-main px-6 lg:px-8 py-2.5 lg:py-3 rounded-full text-secondary border border-secondary text-sm lg:text-base w-40 lg:w-52">
                  ACNE FIGHTER
                </button>
                <button className="flex items-center justify-center bg-main px-6 lg:px-8 py-2.5 lg:py-3 rounded-full text-secondary border border-secondary text-sm lg:text-base w-40 lg:w-52">
                  ANTI AGGING
                </button>
              </div>
              <div className="flex flex-wrap justify-center max-w-[1500px] mx-auto px-5 gap-5 py-10 sm:py-20">
                {items.slice(0, 3).map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            </section>
            {/* FAQ Section  */}
            <section>
              <div className="pt-20 pb-10 lg:py-20 flex px-6 xl:px-0 justify-around w-full">
                <div className="relative w-screen lg:w-[500px] xl:w-[600px] h-[700px]">
                  <Image
                    src="/assets/img5.jpg"
                    alt="skincare"
                    height={700}
                    width={600}
                    priority={true}
                    className="w-screen lg:w-[500px] xl:w-[600px] h-[700px] lg:rounded-2xl object-cover"
                  />
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                    <DetailCard
                      text={"24/7 We’re Here to Help You"}
                      img={"/assets/headphones.svg"}
                      svg={true}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <DotButton text={"Frequently Asked Question"} />
                  </div>
                  <p className="text-3xl sm:text-4xl pt-20">
                    Answers to Your <br /> Skincare Questions, All <br />
                    in One Place.
                  </p>

                  {/* FAQ Questions and answer */}
                  <div className="mt-20 flex flex-col gap-3 text-secondary">
                    {FAQs.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="border border-secondary px-6 py-3 w-full max-w-md xl:max-w-xl rounded-sm"
                        >
                          <div className="flex justify-between items-center">
                            <p className="text-sm xl:text-base">{item.Question}</p>
                            {openIndex === index ? (
                              <HiOutlineMinus
                                onClick={() => toggleFAQ(index)}
                                size={30}
                                className="cursor-pointer"
                              />
                            ) : (
                              <GoPlus
                                onClick={() => toggleFAQ(index)}
                                size={30}
                                className="cursor-pointer"
                              />
                            )}
                          </div>
                          <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              openIndex !== index
                                ? "max-h-0"
                                : "mt-4 max-h-[200px]"
                            }`}
                          >
                            <p>{item.Answer}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
