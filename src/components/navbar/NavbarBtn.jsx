import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <a href="./HassnainHafeezResume.pdf" download>
      <button className="px-4 py-2 text-xl border border-cyan rounded-full text-white font-bold flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:scale-110 hover:boxShadow transition-all duration-500 ">
        Get CV
        <div className="sm:hidden md:block">
          <LuArrowDownRight />
        </div>
      </button>
    </a>
  );
};

export default NavbarBtn;
