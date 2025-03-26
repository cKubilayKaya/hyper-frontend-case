import Link from "next/link";
import React from "react";
import { BasketIcon, FavoriteIcon, MenuIcon } from "./Icons";

export default function Header() {
  return (
    <header className="border-b border-b-[#EDEDED] min-h-[90px] flex items-center">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-bold text-[#0D3356]">
            HyperHub
          </Link>
          <nav className="flex items-center gap-8 ml-14 max-lg:hidden">
            <Link href="/" className="text-[#1D364D]">
              Category
            </Link>
            <Link href="/" className="text-[#1D364D]">
              Brand
            </Link>
            <Link href="/" className="text-[#1D364D]">
              Contact
            </Link>
            <Link href="/" className="text-[#1D364D]">
              FAQ
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4 max-lg:hidden">
          <Link href="/" className="w-12 h-12 rounded-full bg-[#F5F1EE] flex items-center justify-center">
            <BasketIcon color="#875541" size={20} />
          </Link>
          <Link href="/" className="w-12 h-12 rounded-full bg-[#EEEFF8] flex items-center justify-center">
            <FavoriteIcon color="#101F37" size={20} />
          </Link>
          <Link href="/" className="flex items-center gap-3">
            <img src="/avatar.png" className="w-12 h-12 rounded-full" alt="" />
            <span className="text-[#1D364D] font-bold">Test User</span>
          </Link>
        </div>
        <button className="w-12 h-12 rounded-full bg-[#EEEFF8] hidden items-center justify-center max-lg:flex">
          <MenuIcon color="#101F37" size={20} />
        </button>
      </div>
    </header>
  );
}
