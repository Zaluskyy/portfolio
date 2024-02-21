"use client";
import React, { useState, useEffect, useContext } from "react";
import style from "./style/Nav.module.scss";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import logoIcon from "../../../public/icon/logo.svg";
import HamburgerMenuNav from "./HamburgerMenuNav";
import PortfolioContext from "../context/context";

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
  const context = useContext(PortfolioContext);
  const { setPageWidth } = context;
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);

  useEffect(() => {
    if (hamburgerMenu) {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.body.style.overflow = "auto";
    }
  }, [hamburgerMenu]);

  const getSize = () => {
    setPageWidth(window.innerWidth);
    if (window.innerWidth > 650) {
      setHamburgerMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", getSize);
    return () => {
      window.removeEventListener("resize", getSize);
    };
  }, []);

  return (
    <div className={style.Nav}>
      <div className={style.websiteNameContainer}>
        <div className={style.logoContainer}>
          <Image src={logoIcon} alt="logo" />
        </div>
        <h3>Krystian Załuski</h3>
        <div
          className={style.hamburger}
          onClick={() => setHamburgerMenu((prev) => !prev)}
        >
          <div
            className={`${style.hamburgerContainer} ${
              hamburgerMenu && style.exit
            }`}
          >
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>

      <ul className={style.menu}>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>

      <AnimatePresence>{hamburgerMenu && <HamburgerMenuNav />}</AnimatePresence>
    </div>
  );
};

export default Nav;
