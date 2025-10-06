"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav className="fixed top-1 md:top-4 inset-x-1 md:inset-x-4 h-16 max-w-6xl mx-auto rounded-md bg-[#000018] border border-[#082a2b] z-20">
      <div className="flex h-full items-center justify-between px-2 md:px-2">
        {/* Logo with consistent padding */}
        <Link href="/" className="flex-shrink-0 ">
          <Logo />
        </Link>

        {/* Desktop Menu with consistent horizontal spacing */}
        <NavMenu className="hidden md:block text-white" />
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <NavigationSheet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
