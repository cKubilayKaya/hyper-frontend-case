"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BasketIcon, CloseIcon, FavoriteIcon, MenuIcon } from "./Icons";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <Link href="/cart" className="w-12 h-12 rounded-full bg-[#F5F1EE] flex items-center justify-center relative">
            <BasketIcon color="#875541" size={20} />
            <span className="absolute -top-1 -right-2 w-6 h-6 rounded-full border-2 border-white bg-[#4d3a1d] text-white text-xs flex items-center justify-center">
              {cartItems?.length}
            </span>
          </Link>
          <Link href="/favorites" className="w-12 h-12 rounded-full bg-[#EEEFF8] flex items-center justify-center relative">
            <FavoriteIcon color="#101F37" size={20} />
            <span className="absolute -top-1 -right-2 w-6 h-6 rounded-full border-2 border-white bg-[#1D364D] text-white text-xs flex items-center justify-center">
              {favoriteItems?.length}
            </span>
          </Link>
          <Link href="/" className="flex items-center gap-3">
            <img src="/avatar.png" className="w-12 h-12 rounded-full" alt="" />
            <span className="text-[#1D364D] font-bold">Test User</span>
          </Link>
        </div>
        <button className="w-12 h-12 rounded-full bg-[#EEEFF8] hidden items-center justify-center max-lg:flex cursor-pointer" onClick={() => setMenuOpen(true)}>
          <MenuIcon color="#101F37" size={20} />
        </button>
        <div className={`fixed top-0 right-0 h-screen w-full z-50 invisible ${menuOpen ? "visible" : "invisible"}`}>
          <div
            className={`bg-[#000000a1] fixed top-0 right-0 h-screen w-full z-30 transition-all duration-500 ease-in-out invisible ${
              menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setMenuOpen(false)}
          ></div>
          <div
            className={`h-screen w-80 bg-white shadow-lg transform fixed top-0 right-0 z-40 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } transition-all duration-500 ease-in-out max-lg:flex flex-col p-5 max-sm:w-full`}
          >
            <button className="self-end w-12 h-12 rounded-full bg-[#fce3e3] flex items-center justify-center cursor-pointer" onClick={() => setMenuOpen(false)}>
              <CloseIcon color="#d53434" size={24} />
            </button>
            <nav className="mt-10 flex flex-col">
              <Link
                href="/"
                className="text-[#1D364D] py-2 border-b border-b-[#eee] hover:text-[#3A4980] transition duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Category
              </Link>
              <Link
                href="/"
                className="text-[#1D364D] py-2 border-b border-b-[#eee] hover:text-[#3A4980] transition duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Brand
              </Link>
              <Link
                href="/"
                className="text-[#1D364D] py-2 border-b border-b-[#eee] hover:text-[#3A4980] transition duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/"
                className="text-[#1D364D] py-2 border-b border-b-[#eee] hover:text-[#3A4980] transition duration-200"
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/cart"
                className="text-[#1D364D] py-2 border-b border-b-[#eee] hover:text-[#3A4980] transition duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Cart ({cartItems?.length})
              </Link>
              <Link href="/favorites" className="text-[#1D364D] py-2  hover:text-[#3A4980] transition duration-200" onClick={() => setMenuOpen(false)}>
                Favorites ({favoriteItems?.length})
              </Link>
            </nav>
            <div className="flex flex-col mt-auto">
              <Link href="/cart" className="flex items-center gap-2 py-2">
                <img src="/avatar.png" className="w-12 h-12 rounded-full" alt="" />
                <span>Test User</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
