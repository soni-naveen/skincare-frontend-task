import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-[#E7E8E0] overflow-clip relative">
      <div className="pt-16 md:pt-24 lg:pt-28 pb-28 sm:pb-36 md:pb-48 lg:pb-60 2xl:pb-64 min-[110rem]:pb-[360px] px-5 xs:px-10">
        <div className="max-w-7xl mx-auto flex flex-col h-[350px] sm:h-96 md:h-auto md:flex-row justify-between gap-8">
          {/* Left */}
          <div className="flex flex-col justify-between h-40 sm:h-44 md:h-52 lg:h-60 pb-5">
            <h2 className="text-3xl xxs:text-4xl md:text-3xl lg:text-4xl leading-snug">
              Join The Skincare <br /> Community Now.
            </h2>
            <div className="flex flex-wrap w-full justify-between gap-6 text-xs">
              <Link href="#" className="hover:underline">Facebook</Link>
              <Link href="#" className="hover:underline">Instagram</Link>
              <Link href="#" className="hover:underline">YouTube</Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between h-36 md:h-52 lg:h-60 pb-5">
            <div className="text-end xxs:text-start">
              <p className="font-light text-sm sm:text-base">Get in Touch</p>
              <a href="mailto:contact.skincare.com" className="block text-3xl xxs:text-4xl md:text-3xl lg:text-4xl font-medium hover:underline">
                contact.skincare.com
              </a>
            </div>
            <div className="flex flex-wrap w-full justify-between gap-6 text-xs font-light cursor-pointer">
              <Link href="#" className="hover:underline">Terms of Service</Link>
              <Link href="#" className="hover:underline">Privacy Policy</Link>
              <Link href="#" className="hover:underline">Cookies Policy</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-center w-full -bottom-5 sm:-bottom-10 lg:-bottom-16 xl:-bottom-24">
        <p className="text-[22dvw] tracking-tight text-[#35433E] relative leading-none text-center font-bold uppercase">
          SKINCARE
        </p>
      </div>
    </footer>
  );
}
