"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import DetailCard from "./components/DetailCard";
import TextReveal from "./components/TextReveal";

export default function page() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
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

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {loading ? (
        <div className="flex items-end justify-end h-[calc(100vh-10px)]">
          <span className="text-7xl xs:text-8xl text-[#26322C] mr-10 xs:mr-16 mb-5 xs:mb-10 font-medium">
            {count}
          </span>
        </div>
      ) : (
        <>
          <Navbar />
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
              <button className="hidden xs:block absolute top-[50%] md:top-[40%] lg:top-[25%] right-[6%] md:left-[5%] lg:left-[7%] bg-secondary px-6 lg:px-8 py-2.5 lg:py-3 rounded-full text-primary font-light text-sm lg:text-base w-fit">
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
          <section className="bg-main">
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
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              praesentium sequi voluptatem, facilis provident corrupti nostrum
              ducimus, magni possimus delectus veniam rerum quis officia
              reiciendis eos, odit iusto enim. Quam consectetur consequuntur
              officia, necessitatibus eveniet praesentium doloribus recusandae
              quia inventore odio quibusdam corporis optio asperiores quo
              dignissimos! Porro quas inventore fugit, qui, quibusdam eum
              architecto in ex debitis excepturi omnis quos fuga nihil cum,
              autem consequatur optio quae aperiam dolor laboriosam. Quisquam
              deleniti autem, rem nisi a asperiores placeat, tempora quia
              tenetur ullam alias! Aspernatur, exercitationem eum adipisci
              dolores dolorem, quasi, magni rem voluptatem temporibus unde
              possimus ipsa autem quibusdam id! Repudiandae cum ipsum incidunt
              expedita fugiat magni aliquam vitae tempora maiores dicta sed
              error necessitatibus aspernatur animi deserunt architecto velit,
              placeat at, mollitia nostrum harum, laudantium quia sapiente
              culpa. In eligendi saepe nemo asperiores blanditiis quia vero non
              corporis perspiciatis architecto itaque officiis aliquam
              consequatur suscipit voluptate fugit, cupiditate excepturi error
              dolorum! Deleniti fugit possimus aliquam doloremque quam quidem
              laborum ipsum repudiandae dicta vel eligendi voluptate, odit
              maiores nulla, ab autem commodi sit repellat ratione dolorum iure
              ipsa. Velit ratione quo ipsum aliquid, odit ipsam enim hic nostrum
              eius dolor vitae ut mollitia sequi asperiores facilis autem vero
              at architecto? Nisi velit dignissimos doloremque asperiores fuga
              corporis odit deserunt doloribus corrupti libero facere quaerat
              repudiandae tenetur, maiores ab tempora, facilis sed excepturi
              magni voluptatem amet deleniti atque. Assumenda non eveniet velit
              at dignissimos alias repudiandae? Eum eius odit, est esse repellat
              labore architecto. Eos delectus illo vel tempore quidem eligendi
              itaque autem, assumenda, dignissimos, doloribus repudiandae!
              Voluptatibus ratione, unde animi magnam illum nostrum blanditiis
              quasi accusantium molestias, veritatis commodi iusto sequi beatae
              corrupti quam labore obcaecati voluptates. Repudiandae modi rem,
              impedit expedita numquam assumenda temporibus voluptate quam
              exercitationem iure repellat voluptatum molestias soluta? Ab earum
              voluptatem dolorem dolorum dolore impedit debitis qui
              reprehenderit quas excepturi libero vitae, autem praesentium quasi
              quis aperiam velit officia nulla quia. Obcaecati, necessitatibus
              tempora laudantium maxime a reiciendis accusamus corporis expedita
              veritatis, vero reprehenderit. Similique eligendi voluptatum
              dolorem atque deleniti odio qui doloribus? Natus expedita animi,
              eum iure fugiat velit cum nemo magni alias in ullam amet totam
              quasi rem rerum atque, reprehenderit, ad illum consectetur dolorem
              nesciunt minima. Labore obcaecati perspiciatis explicabo optio id
              aperiam adipisci ea iusto laborum fugit ipsum at, sapiente cum
              quisquam laboriosam numquam corporis placeat, quaerat nisi? Magnam
              hic et dolores eum officia cum natus excepturi, voluptatum
              provident dolore adipisci itaque quia suscipit quos ipsum
              quibusdam libero obcaecati nulla voluptatem eos dolorem odio
              accusantium! Amet porro nam, asperiores illum iste vel explicabo
              modi voluptatibus dicta eveniet beatae eos, suscipit velit neque.
              Sapiente quisquam quo fugiat, architecto odit possimus dolor
              corrupti eum libero eligendi quod quaerat eius enim. Autem quasi
              aspernatur tenetur dolores possimus totam animi, ad nulla commodi
              molestias veniam, ex sequi error fugit eaque obcaecati aperiam
              esse modi reprehenderit porro itaque culpa. Autem fugit
              perspiciatis rem cum accusantium, molestiae vitae qui nisi aliquam
              saepe corporis, ullam voluptates, officiis laudantium hic
              reprehenderit. Quaerat neque ea, expedita accusamus eligendi, odit
              maxime dignissimos unde quo minima illum? Itaque officia ab
              consequatur laboriosam, ex quo perferendis voluptatum blanditiis
              eligendi vitae nesciunt deleniti rerum incidunt. Dolor ipsam quam
              quos quo a nostrum odio quas dignissimos asperiores laudantium.
              Assumenda dicta pariatur unde, nisi amet quod accusantium suscipit
              nihil fugiat quasi repellendus provident odio quisquam voluptatum
              vitae voluptatibus similique eaque nam ipsum? Ratione iusto
              facilis illo sapiente sequi perspiciatis aut, harum adipisci
              cupiditate labore. Aut illo vitae fuga esse veritatis porro
              tempore, distinctio voluptatem temporibus veniam ullam iusto
              dolor! Cumque aspernatur perspiciatis ipsum fugiat saepe esse
              voluptatem quibusdam totam eius adipisci eos, consectetur, dolorem
              corporis animi minima sed qui beatae at necessitatibus blanditiis
              repellat quis, ullam reiciendis. Debitis doloribus aspernatur a,
              eius dolor atque odit! Sed odit nam illum natus aut aliquid
              voluptates sapiente! Fugiat nemo molestias debitis modi. Voluptas
              eum, reiciendis modi cupiditate quo illum error dignissimos,
              impedit quisquam architecto voluptate quas molestias consequatur
              nihil distinctio fugiat odio dicta culpa aut ex. Harum minus
              cumque maxime ex, mollitia nam, corporis ducimus voluptate
              doloribus fugit dolore ut modi corrupti, voluptates id impedit eum
              saepe. Minus aut nemo praesentium, eos ratione eveniet consectetur
              obcaecati, sed neque deleniti aperiam necessitatibus natus numquam
              assumenda commodi in quaerat incidunt harum. Reiciendis impedit
              vitae nostrum dolorem, dolore, quaerat officia id, sunt labore
              aliquid ratione et vel pariatur sequi esse doloremque ea a! Dolor
              voluptatum ipsum itaque explicabo sit dolorum iste error ex id?
              Aspernatur debitis laboriosam dolore quae neque tempora quas
              eligendi quos consequatur assumenda fuga nulla alias consectetur
              quidem sapiente iste sit, iure nihil quam molestiae? Quod iusto
              quasi, impedit alias beatae debitis ea vitae recusandae aut, quos
              labore! Et obcaecati delectus error, deleniti beatae ipsam?
              Tempore reiciendis voluptatibus illo cum dignissimos recusandae,
              voluptas aliquam laboriosam debitis mollitia. Totam nesciunt illo,
              sint tenetur eos architecto voluptatem, iusto ab at neque aliquam,
              aspernatur tempore dolor quas reiciendis quaerat corrupti porro
              molestiae delectus obcaecati repellat pariatur dicta. Ratione
              facilis quidem, iusto numquam, neque nisi eum sapiente esse quam
              ipsam natus architecto, hic adipisci cupiditate voluptatum quaerat
              quo minus ipsum ea quibusdam veniam. Consectetur tempore
              doloremque exercitationem sint iste, id accusantium maiores optio?
              Reprehenderit ab exercitationem consequuntur cumque voluptate ea
              voluptas facere delectus eveniet maiores rerum minima, doloribus
              temporibus quis ratione laborum labore. Fuga voluptatem
              praesentium facilis labore expedita est odio. Inventore quibusdam
              repellat amet facere eaque incidunt tempora nulla error pariatur
              sapiente perferendis voluptates, aliquam impedit veniam ab
              explicabo quas aspernatur magni et laboriosam provident modi
              fugiat ad doloribus? Placeat delectus enim dicta eos sequi quidem
              laborum obcaecati quae molestias, aliquid omnis, excepturi maxime
              eaque sunt consequatur cumque, exercitationem adipisci cupiditate!
              Dicta nam consequuntur accusantium ducimus ab aperiam, dolore quod
              aliquid a dolores asperiores nemo assumenda alias aliquam
              temporibus possimus non vel at numquam aspernatur perferendis
              quaerat illo inventore! Exercitationem consequatur odio rem illo
              eligendi. Velit vitae blanditiis, fuga tempore similique rem iusto
              deserunt. Minus eligendi illo, facere libero vero quis odit
              voluptatum praesentium, numquam cumque aperiam vitae laudantium
              quos? Dolore labore enim optio fuga consequatur possimus nesciunt
              assumenda quaerat modi.
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
}
