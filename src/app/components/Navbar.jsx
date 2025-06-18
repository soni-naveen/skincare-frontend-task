"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-4 md:px-6 lg:px-8 py-4">
      <div className="max-w-[90rem] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">SKINCARE</div>

        {/* Links*/}
        <div className="hidden sm:flex space-x-5 md:space-x-8 text-sm text-gray-700">
          <Link href="#" className="hover:underline">
            All Products
          </Link>
          <Link href="#" className="hover:underline">
            Serum
          </Link>
          <Link href="#" className="hover:underline">
            Sunscreen
          </Link>
          <Link href="#" className="hover:underline">
            Bundle
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link href="#" className="relative flex items-center gap-1">
            <div className="rounded-full bg-[#F8FEE5] p-1.5 sm:p-2 flex items-center gap-1">
              <img
                src="/assets/shoppingbag.svg"
                className="w-5 h-5 text-gray-800"
              />
            </div>
            <p className="hidden md:block text-sm">Cart(1)</p>
          </Link>
          <Link href="#">
            <div className="rounded-full bg-[#F8FEE5] p-1.5 sm:p-2">
              <img src="/assets/heart.svg" className="w-5 h-5 text-gray-800" />
            </div>
          </Link>
          <Link href="#">
            <div className="rounded-full bg-[#F8FEE5] p-1.5 sm:p-2">
              <img src="/assets/user.svg" className="w-5 h-5 text-gray-800" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
