import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#2D3B36]">
      <footer className="text-[#E7E8E0] pt-16 md:pt-24 lg:pt-28 pb-12 px-5 xs:px-10">
        <div className="max-w-7xl mx-auto flex flex-col h-96 md:h-auto md:flex-row justify-between gap-8">
          {/* Left */}
          <div className="flex flex-col justify-between h-36 md:h-52 lg:h-60">
            <h2 className="text-3xl xxs:text-4xl md:text-3xl lg:text-4xl leading-snug">
              Join The Skincare <br /> Community Now.
            </h2>
            <div className="flex flex-wrap w-full justify-between gap-6 text-xs font-light">
              <Link href="#">Facebook</Link>
              <Link href="#">Instagram</Link>
              <Link href="#">YouTube</Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between h-36 md:h-52 lg:h-60">
            <div>
              <p className="font-light text-sm sm:text-base">
                Get in Touch
              </p>
              <p className="text-3xl xxs:text-4xl md:text-3xl lg:text-4xl font-medium">
                contact.skincare.com
              </p>
            </div>
            <div className="flex flex-wrap w-full justify-between gap-6 text-xs font-light">
              <Link href="#">Terms of Service</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Cookies Policy</Link>
            </div>
          </div>
        </div>
      </footer>
      <div className="-mb-10 leading-none overflow-hidden text-clamp font-extrabold text-[#3D4B4680] text-center">
        SKINCARE
      </div>
    </div>
  );
}
