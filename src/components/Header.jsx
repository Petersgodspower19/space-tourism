import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import Links from "./Links";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((state) => !state);
  }

  return (
    <header className="flex items-center justify-between p-5 bg-transparent relative z-20">
      
      <img src={logo} alt="Logo" className="w-10 h-auto" />

      
      <nav className="hidden md:flex items-center gap-6 px-6 py-3 text-white uppercase rounded-lg backdrop-blur-md bg-white/20">
        <Links to="/">Home</Links>
        <Links to="/destination">Destinations</Links>
        <Links to="/crew">Crew</Links>
        <Links to="/technology">Technology</Links>
      </nav>

      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        <img src={isOpen ? close : menu} alt="Menu Icon" />
      </button>

      
      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-black/80 backdrop-blur-md text-white p-6 flex flex-col items-center gap-5">
          <Links to="/" onClick={toggleMenu}>Home</Links>
          <Links to="/destination" onClick={toggleMenu}>Destinations</Links>
          <Links to="/crew" onClick={toggleMenu}>Crew</Links>
          <Links to="/technology" onClick={toggleMenu}>Technology</Links>
        </div>
      )}
    </header>
  );
}

export default Header;
