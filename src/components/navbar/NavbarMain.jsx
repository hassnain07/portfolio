import React, { useState } from "react";
import Navbarlogo from "./NavbarLogo";
import NavbarLinks from "./Navbarlinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="max-w-[1200px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-5">
      <div className="max-w-[1200px] mx-auto p-6 w-full  flex justify-between items-center bg-black rounded-r-full rounded-l-full border-orange border-[0.5px]">
        <Navbarlogo></Navbarlogo>
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks></NavbarLinks>
        </div>
        <NavbarBtn></NavbarBtn>
      </div>
      <div className="flex lg:hidden md:block sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange">
        <button
          className="text-2xl p-3 border border-orange rounded-full text-white"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
