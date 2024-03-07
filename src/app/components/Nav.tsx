"use client";
import React, { useState, useEffect, useContext, SetStateAction } from "react";
import style from "./style/Nav.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import HamburgerMenuNav from "./HamburgerMenuNav";
import PortfolioContext from "../context/context";
import { IMenuArr } from "../types/type";

interface NavProps {
  setWhere: React.Dispatch<SetStateAction<IMenuArr>>;
  setMenuClick: React.Dispatch<SetStateAction<number>>;
}

const Nav: React.FC<NavProps> = ({ setWhere, setMenuClick }) => {
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

  const menuArr: IMenuArr[] = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

  const menu = menuArr.map((item: IMenuArr) => {
    const scroll = () => {
      setWhere(item);
      setMenuClick((prev) => prev + 1);
    };

    return (
      <li key={item} onClick={scroll}>
        {item}
      </li>
    );
  });

  const logoSVG = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_582_53)">
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.5 }}
          d="M12.6586 21.6586L4.34142 13.3414C4.21543 13.2154 4 13.3047 4 13.4828V21.8C4 21.9105 4.08954 22 4.2 22H12.5172C12.6953 22 12.7846 21.7846 12.6586 21.6586Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.5 }}
          d="M4 5.91716V2.48284C4 2.30466 4.21543 2.21543 4.34142 2.34142L11.8586 9.85858C11.9367 9.93668 11.9367 10.0633 11.8586 10.1414L10.1414 11.8586C10.0633 11.9367 10.0633 12.0633 10.1414 12.1414L19.6586 21.6586C19.7846 21.7846 19.6953 22 19.5172 22H16.0828C16.0298 22 15.9789 21.9789 15.9414 21.9414L6.14142 12.1414C6.06332 12.0633 6.06332 11.9367 6.14142 11.8586L7.85858 10.1414C7.93668 10.0633 7.93668 9.93668 7.85858 9.85858L4.05858 6.05858C4.02107 6.02107 4 5.9702 4 5.91716Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.5 }}
          d="M19.5172 2H7.48284C7.30466 2 7.21543 2.21543 7.34142 2.34142L13.3586 8.35858C13.4367 8.43668 13.5633 8.43668 13.6414 8.35858L19.6586 2.34142C19.7846 2.21543 19.6954 2 19.5172 2Z"
          stroke="white"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_582_53">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div className={style.Nav}>
      <div className={style.websiteNameContainer}>
        <div className={style.logoContainer}>{logoSVG}</div>
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

      <ul className={style.menu}>{menu}</ul>

      <AnimatePresence>
        {hamburgerMenu && (
          <HamburgerMenuNav
            setWhere={setWhere}
            setMenuClick={setMenuClick}
            setHamburgerMenu={setHamburgerMenu}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
