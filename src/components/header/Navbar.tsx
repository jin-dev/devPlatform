import Link from "next/link";
import Image from 'next/image';
import React, { useState } from "react";
import NavItem from "./NavItem";

interface MenuItem {
  text: string;
  href: string;
}

const MENU_LIST: MenuItem[] = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [navActive, setNavActive] = useState<boolean | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  return (
    <header>
      <nav className={`nav`}>
          <Image 
           width={366}
           height={60}
           alt="Picture of the author"
          src="https://www.nespresso.com/ecom/medias/sys_master/public/10866891554846/logo-white.svg" />

          
        <div onClick={() => setNavActive(!navActive)} className={`nav__menu-bar`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;