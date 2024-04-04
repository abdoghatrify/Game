"use client";

import { useState } from "react";
import Logo from "../Components/logo";
import NavItem from "../Components/navItem";
import Link from "next/link";
import clsx from "clsx";

const hamburgerMenu = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=" w-10 h-10"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M4 18L20 18"
        stroke="#fad039"
        stroke-width="2"
        stroke-linecap="round"
      ></path>{" "}
      <path
        d="M4 12L20 12"
        stroke="#fad039"
        stroke-width="2"
        stroke-linecap="round"
      ></path>{" "}
      <path
        d="M4 6L20 6"
        stroke="#fad039"
        stroke-width="2"
        stroke-linecap="round"
      ></path>{" "}
    </g>
  </svg>
);

const navItems = [
  { title: "Home", href: "." },
  { title: " Prices", href: "/prices" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact Us", href: "/contact" },
];
const navElements = navItems.map((el, index) => {
  return (
    <div key={index}>
      <NavItem itemName={el.title} href={el.href} />
    </div>
  );
});
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed md:static md:-mt-60 w-full top-0 z-40 bg-main-black/50 md:bg-transparent">
      <div className="flex items-center py-9 container mx-auto text-center md:justify-between px-5">
        <Link href={"."} className="flex-1">
          <Logo />
        </Link>
        <div
          className={clsx("", {
            "hamburger-nav-bar": isOpen,
            "hidden md:flex": !isOpen,
          })}
        >
          {navElements}
        </div>
        <div className="py-1 md:flex-1"></div>
        <button className="block md:hidden " onClick={() => setIsOpen(!isOpen)}>
          {hamburgerMenu}
        </button>
      </div>
    </div>
  );
}

// flex flex-col md:flex-row md:static fixed top-[141px] right-0 justify-center items-center w-full bg-main-black/50 gap-5 md:bg-transparent p-2 text-main-yellow md:text-black
